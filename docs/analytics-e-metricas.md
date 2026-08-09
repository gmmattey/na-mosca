# Na Mosca — analytics e métricas

> Analytics serve para descobrir se o jogo está vivo. Não para colecionar evento inútil igual figurinha.

## 1. Perguntas que os dados precisam responder

No começo, analytics só precisa responder:

1. as pessoas começam a jogar?
2. terminam a primeira partida?
3. jogam de novo?
4. compartilham?
5. convite traz outra pessoa?
6. qual parte faz gente desistir?
7. anúncio, quando existir, estraga a revanche?

Se um evento não ajuda a responder isso, provavelmente pode esperar.

## 2. Eventos mínimos — solo

- `game_opened`
- `solo_started`
- `question_shown`
- `guess_submitted`
- `round_revealed`
- `solo_completed`
- `rematch_started`
- `result_shared`

Campos úteis, sem dado pessoal:

- `session_id`
- `question_id`
- `category`
- `difficulty`
- `round_number`
- `points`
- `error_band`
- `elapsed_seconds`

Não registrar o texto digitado em nenhum lugar porque aqui o chute já é numérico e o valor bruto raramente precisa ir para analytics.

## 3. Eventos mínimos — multiplayer

- `room_created`
- `room_joined`
- `room_start_attempted`
- `multiplayer_started`
- `round_started`
- `guess_submitted`
- `round_completed`
- `multiplayer_completed`
- `rematch_started`
- `invite_shared`
- `invite_opened`
- `invite_joined`

Campos:

- `room_id` pseudônimo/técnico;
- `player_count`;
- `round_count`;
- `timer_mode`;
- `category_count`;
- `round_number`;
- `entry_source` quando conhecido.

Não guardar nickname em analytics.

## 4. Funil solo

Funil principal:

`game_opened → solo_started → primeiro guess → solo_completed → rematch_started`

Métricas:

### Taxa de início

`solo_started / game_opened`

### Primeira resposta

`usuários que enviaram pelo menos 1 chute / solo_started`

### Conclusão

`solo_completed / solo_started`

### Revanche

`rematch_started / solo_completed`

## 5. Funil social

`room_created → invite_shared → room_joined → multiplayer_started → multiplayer_completed → rematch_started`

Esse funil diz se a sala é uma brincadeira ou um formulário de financiamento imobiliário.

## 6. Métrica de viralidade simples

Não precisamos calcular um K-factor acadêmico no primeiro dia.

Acompanhar:

- convites compartilhados por sala;
- taxa de abertura do convite;
- taxa `invite_joined / invite_opened`;
- novos jogadores originados por convite;
- partidas criadas por quem entrou via convite.

O sinal mais bonito é:

> alguém recebeu convite, jogou e depois criou a própria sala.

## 7. Métricas de conteúdo

Por pergunta:

- vezes exibida;
- taxa de resposta;
- erro percentual mediano;
- distribuição de pontos;
- abandono após a pergunta;
- compartilhamento associado à revelação;
- denúncias/flag editorial, futuramente.

Pergunta em que todo mundo acerta pode ser fácil demais.
Pergunta em que ninguém chega nem perto pode ser ruim ou maravilhosa — precisa olhar contexto.

## 8. Métricas de experiência

- tempo entre abrir e primeiro chute;
- duração média da partida;
- abandono por rodada;
- taxa de erro técnico;
- reconexões multiplayer;
- salas criadas que nunca começam;
- média de jogadores por sala.

## 9. Metas iniciais — hipóteses, não promessa

Só usar depois de volume mínimo razoável.

### Primeira fase: sinal de experiência

Após pelo menos 100 partidas solo iniciadas:

**Verde**
- conclusão >= 65%
- revanche >= 20%
- compartilhamento >= 5%

**Amarelo**
- conclusão 45–64%
- revanche 10–19%
- compartilhamento 2–4,9%

**Vermelho**
- conclusão < 45%
- revanche < 10%

Não matar o jogo por uma única métrica vermelha. Procurar onde o funil quebra.

### Multiplayer

Após pelo menos 50 salas com 2+ pessoas:

**Verde**
- >= 70% das salas com jogadores suficientes começam
- >= 70% das partidas iniciadas terminam
- revanche >= 25%

**Vermelho**
- menos de metade das salas consegue começar
- menos de metade das partidas termina

## 10. Critério continua / muda / mata

### Continua

Existe crescimento ou retenção clara e jogadores espontaneamente pedem outra partida.

### Muda

Entrada é boa, mas existe quebra específica: perguntas ruins, partida longa, convite confuso, anúncio intrusivo, etc.

### Mata ou congela

Depois de iterações reais, usuários entendem o jogo mas não voltam, não compartilham e não demonstram vontade de jogar novamente.

Não confundir bug de onboarding com falta de interesse no jogo.

## 11. Privacidade

Analytics deve preferir:

- IDs técnicos/pseudônimos;
- agregação;
- eventos de produto;
- mínimo de retenção necessário.

Evitar:

- nome;
- email;
- nickname;
- IP armazenado por nós;
- fingerprinting;
- dado sensível sem motivo.

## 12. Implementação inicial

Nada de contratar plataforma de analytics antes de receita.

Opções aceitáveis no MVP:

- tabela/eventos próprios no `auê-games`, com volume controlado;
- métricas disponíveis gratuitamente na infraestrutura usada;
- agregação periódica quando necessário.

Se analytics começar a consumir banco demais, simplificar antes de pagar ferramenta nova.

## 13. Dashboard mínimo

Quando existir painel, ele só precisa mostrar:

- usuários/visitantes;
- partidas iniciadas;
- partidas concluídas;
- conclusão;
- revanche;
- compartilhamento;
- convites convertidos;
- erros;
- receita, quando existir.

Se tiver 47 gráficos e ninguém sabe dizer se o jogo está melhorando, o dashboard virou decoração.