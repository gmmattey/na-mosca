# Na Mosca — modelo de dados

> A ideia é guardar o que o jogo precisa e só. Banco não é depósito de entulho emocional do produto.

## 1. Princípios

- tudo do Na Mosca usa prefixo `nm_`;
- IDs internos em UUID;
- timestamps em UTC;
- RLS em toda tabela exposta;
- jogador usa `auth.users.id` como identidade técnica;
- apelido é dado de sala, não identidade global;
- resposta correta nunca fica liberada para consulta pública antes da revelação;
- pontuação é calculada por regra do servidor, não enviada pronta pelo cliente;
- dados derivados só são persistidos quando trouxerem ganho real de desempenho ou histórico.

## 2. `nm_categories`

Categorias disponíveis para perguntas.

Campos:

- `id uuid pk`
- `slug text unique not null`
- `name text not null`
- `description text null`
- `is_active boolean default true`
- `sort_order int default 0`
- `created_at timestamptz`
- `updated_at timestamptz`

Exemplos: `brasil`, `mundo`, `tecnologia`, `comida`, `esportes`.

## 3. `nm_questions`

Banco editorial de perguntas.

Campos:

- `id uuid pk`
- `category_id uuid fk nm_categories`
- `prompt text not null`
- `answer_numeric numeric not null`
- `unit text not null`
- `difficulty text not null` — `easy | medium | hard`
- `reveal_text text null`
- `source_label text not null`
- `source_url text not null`
- `reference_date date null`
- `min_guess numeric null`
- `max_guess numeric null`
- `status text not null` — `draft | published | disabled`
- `version int default 1`
- `created_at timestamptz`
- `updated_at timestamptz`

Regras:

- `answer_numeric > 0` no MVP;
- `prompt` não pode estar vazio;
- pergunta publicada precisa de fonte;
- pergunta que muda com o tempo deve usar `reference_date` ou deixar a referência explícita no enunciado;
- pergunta desativada não pode entrar em nova partida.

## 4. `nm_rooms`

Representa uma sala multiplayer.

Campos:

- `id uuid pk`
- `code text unique not null`
- `host_user_id uuid not null`
- `status text not null` — `lobby | playing | finished | expired`
- `round_count int not null`
- `answer_time_seconds int not null`
- `category_filter jsonb null`
- `current_round_index int default 0`
- `created_at timestamptz`
- `started_at timestamptz null`
- `finished_at timestamptz null`
- `expires_at timestamptz not null`

Regras:

- código curto e humano;
- código não é segredo de segurança;
- host precisa ser membro ativo da sala;
- sala expirada não aceita entrada nem nova rodada.

## 5. `nm_room_players`

Participantes de uma sala.

Campos:

- `id uuid pk`
- `room_id uuid fk nm_rooms not null`
- `user_id uuid not null`
- `nickname text not null`
- `score int default 0`
- `joined_at timestamptz`
- `last_seen_at timestamptz`
- `left_at timestamptz null`
- `status text` — `active | disconnected | left`

Índices/regras:

- unique `(room_id, user_id)`;
- nickname com limite curto, por exemplo 24 caracteres;
- impedir dois participantes ativos com o mesmo nickname na mesma sala se isso gerar confusão;
- `score` nunca é atualizado diretamente pelo cliente.

## 6. `nm_rounds`

Uma pergunta dentro de uma sala.

Campos:

- `id uuid pk`
- `room_id uuid fk nm_rooms not null`
- `question_id uuid fk nm_questions not null`
- `round_index int not null`
- `status text not null` — `waiting | accepting_guesses | revealing | finished`
- `starts_at timestamptz null`
- `guess_deadline timestamptz null`
- `revealed_at timestamptz null`
- `finished_at timestamptz null`

Regras:

- unique `(room_id, round_index)`;
- a mesma pergunta não deve repetir na mesma partida;
- `question_id` existe no banco, mas a resposta correta continua protegida por RLS/RPC.

## 7. `nm_guesses`

Palpites multiplayer.

Campos:

- `id uuid pk`
- `round_id uuid fk nm_rounds not null`
- `player_id uuid fk nm_room_players not null`
- `guess_numeric numeric not null`
- `submitted_at timestamptz not null`
- `error_percent numeric null`
- `points int null`
- `round_rank int null`

Regras:

- unique `(round_id, player_id)`;
- depois de confirmado, palpite não muda;
- antes da revelação, jogador enxerga apenas o próprio palpite;
- `error_percent`, `points` e `round_rank` são preenchidos pelo servidor na resolução.

## 8. Solo sem encher o banco

O MVP não precisa de `nm_solo_answers` para cada resposta de cada visitante.

A partida solo pode viver no navegador e usar RPCs pontuais:

- obter pergunta;
- enviar palpite e revelar;
- buscar próxima.

Se quisermos recorde persistente depois, adicionar:

### `nm_player_stats`

- `user_id uuid pk`
- `solo_games int`
- `best_solo_score int`
- `total_exact_hits int`
- `total_questions int`
- `updated_at timestamptz`

Só criar quando a função realmente entrar no produto.

## 9. Analytics mínimo

Se analytics próprio for mantido no Supabase, usar uma tabela enxuta e com retenção curta.

### `nm_events`

Campos possíveis:

- `id bigint generated`
- `user_id uuid null`
- `session_id uuid null`
- `room_id uuid null`
- `event_name text not null`
- `metadata jsonb null`
- `created_at timestamptz`

Eventos permitidos no MVP:

- `game_opened`
- `solo_started`
- `solo_finished`
- `room_created`
- `room_joined`
- `multiplayer_started`
- `multiplayer_finished`
- `rematch_started`
- `share_clicked`
- `invite_opened`

Não gravar eventos de UI inúteis só porque dá.

## 10. Relações principais

```text
auth.users
   |
   +---- nm_room_players ---- nm_rooms
             |                   |
             |                   +---- nm_rounds ---- nm_questions ---- nm_categories
             |                         |
             +-------------------------+---- nm_guesses
```

## 11. RLS — visão simples

### Categorias

Leitura pública/autenticada somente de categorias ativas.

### Perguntas

O cliente não deve ter `SELECT` irrestrito na tabela inteira.

Acesso ao conteúdo jogável passa por RPC para não vazar `answer_numeric`, fonte administrativa ou perguntas desativadas antes da hora.

### Salas

Jogador pode ler sala da qual participa.

Host pode alterar apenas configurações permitidas enquanto a sala estiver em `lobby`.

### Participantes

Jogador pode ler os membros da própria sala.

Não pode alterar score.

### Palpites

Antes da revelação:

- usuário lê o próprio palpite;
- não lê o dos outros.

Depois da revelação:

- membros da sala podem ler todos os palpites da rodada.

## 12. Funções/RPC necessárias

Contratos conceituais:

- `nm_create_room(config, nickname)`
- `nm_join_room(code, nickname)`
- `nm_start_game(room_id)`
- `nm_get_solo_question(exclusions?)`
- `nm_submit_solo_guess(question_token, guess)`
- `nm_submit_guess(round_id, guess)`
- `nm_close_round(round_id)`
- `nm_advance_round(room_id)`
- `nm_finish_game(room_id)`
- `nm_transfer_host(room_id, new_host_user_id)`

Os nomes podem mudar na implementação. A responsabilidade não.

## 13. Dados que não precisamos guardar

No MVP não há motivo para armazenar:

- tecla digitada;
- histórico de cada mudança no campo de palpite;
- IP em tabela própria;
- localização precisa;
- contatos;
- chat;
- presença histórica segundo a segundo;
- snapshot completo da sala a cada evento.

Quanto menos lixo armazenamos, menos banco, menos privacidade para administrar e menos chance de fazer cagada.

## 14. Expiração e limpeza

Salas e dados transitórios precisam morrer.

Sugestão inicial:

- sala nunca iniciada: expira em 6 horas;
- sala finalizada: manter por até 7 dias se necessário para resultado/revanche;
- eventos brutos: retenção curta, por exemplo 30 dias;
- usuários anônimos antigos sem uso: rotina periódica de limpeza conforme política definida para o projeto Supabase.

Os prazos são operacionais e podem ser ajustados depois de observar uso real.

## 15. Regra final

O schema precisa permitir jogar e medir sem virar um museu de tabelas.

Se uma tabela nova não tem função clara no MVP, ela não entra só porque parece organizada.