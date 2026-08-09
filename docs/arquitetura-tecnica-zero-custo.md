# Na Mosca — arquitetura técnica zero-custo

> Regra número zero: essa porra não ganha o direito de gerar boleto antes de gerar receita.

## 1. Objetivo

Construir o Na Mosca para lançar, medir uso e até monetizar sem criar custo recorrente obrigatório de infraestrutura.

A arquitetura deve aguentar o MVP e os primeiros usuários usando somente os planos gratuitos já disponíveis.

Se um recurso exigir upgrade antes de o jogo provar que dá retorno, o recurso perde a discussão.

## 2. Stack escolhida

### Frontend

- React + TypeScript + Vite.
- WebApp/PWA mobile-first.
- Hospedagem no Cloudflare Pages.
- `na-mosca.pages.dev` no começo.
- domínio próprio só quando houver motivo financeiro ou de marca.

### Backend, banco e realtime

- Supabase Free.
- mesmo projeto Supabase compartilhado com os demais jogos da linha, usando prefixos próprios de tabela.
- Postgres como banco.
- Supabase Auth com login anônimo.
- Supabase Realtime apenas no multiplayer.
- Row Level Security em toda tabela exposta.
- funções Postgres/RPC para operações que não podem confiar no navegador.

### Proteção contra abuso

- Cloudflare Turnstile no login anônimo e em pontos que possam ser automatizados abusivamente.
- rate limit simples em operações sensíveis.

### Analytics

No MVP, analytics próprio e mínimo.

Eventos essenciais podem ser gravados de forma amostrada ou agregada. Não vamos instalar cinco SDKs de analytics para descobrir que alguém apertou um botão.

## 3. Por que Cloudflare Pages

O jogo é majoritariamente arquivo estático: HTML, CSS, JavaScript, fontes e imagens pequenas.

Isso é perfeito para Pages.

O frontend não precisa de servidor dedicado nem de processo rodando 24 horas.

A aplicação chama o Supabase diretamente quando precisa de banco, autenticação ou realtime.

Pages Functions/Workers ficam fora do caminho principal do MVP. Se depois aparecer um caso que realmente precise deles, usamos. Não vamos gastar quota só porque existe.

## 4. Por que Supabase compartilhado

O Free tem limite de projetos ativos. Criar um Supabase para cada jogo é uma ótima forma de acabar pagando por bancos quase vazios.

A proposta é um projeto lógico de jogos, por exemplo:

`buildea-games`

Dentro dele, tudo do Na Mosca usa prefixo `nm_`.

Exemplos:

- `nm_questions`
- `nm_rooms`
- `nm_room_players`
- `nm_rounds`
- `nm_guesses`

O Quem Mente? usa `qm_` e não mete a mão nas tabelas do Na Mosca.

Compartilhar a infraestrutura não significa misturar regra de jogo.

## 5. Identidade do jogador

O jogador não precisa criar conta para começar.

Na primeira ação que exige identidade persistente, o app chama o login anônimo do Supabase.

O usuário recebe um `user_id` real do Auth sem informar email, senha ou nome completo.

Isso permite:

- RLS de verdade;
- reconexão;
- impedir jogador de responder duas vezes na mesma rodada;
- ligar o mesmo participante à sala;
- converter a conta anônima em conta permanente no futuro, se um dia isso fizer sentido.

Apelido de sala não é identidade de segurança. É só o nome que os amigos veem.

## 6. Regra de segurança

A chave pública do Supabase pode ficar no frontend. A chave de serviço nunca.

Toda tabela exposta deve usar RLS.

O navegador nunca recebe acesso livre a:

- resposta correta antes da revelação;
- palpites dos outros antes do fechamento da rodada;
- campos administrativos das perguntas;
- operações que alteram pontuação diretamente.

Se o jogador consegue mudar o placar abrindo o DevTools, fizemos uma bela merda.

## 7. Solo: barato e simples

No modo solo não existe necessidade de realtime.

Fluxo recomendado:

1. app pede uma pergunta por RPC;
2. servidor devolve apenas o que o jogador pode saber: enunciado, unidade e metadados visíveis;
3. jogador envia palpite;
4. RPC calcula resultado e devolve resposta correta, erro, pontos e curiosidade;
5. frontend anima a revelação.

A pontuação oficial vem do banco/RPC.

Mesmo que alguém consiga trapacear localmente, não deve existir uma API que aceite `pontos=1000` enviados pelo cliente.

### Sessão solo

No MVP, uma partida solo não precisa gerar dez registros permanentes no banco.

Podemos manter o estado da sessão no navegador e persistir apenas:

- início/fim da sessão, se quisermos analytics;
- recorde pessoal, futuramente;
- eventos de compartilhamento.

Isso reduz escrita inútil no banco.

## 8. Multiplayer

Cada sala possui:

- um registro em `nm_rooms`;
- participantes em `nm_room_players`;
- uma rodada ativa em `nm_rounds`;
- palpites em `nm_guesses`.

Cada sala abre apenas um canal realtime privado.

Exemplo conceitual:

`room:nm:<room_id>`

O realtime deve transportar **eventos pequenos de estado**, não cópias gigantes da sala.

Exemplos:

- jogador entrou;
- jogador saiu;
- rodada começou;
- jogador respondeu;
- rodada fechou;
- ranking atualizado;
- partida terminou.

Não precisamos transmitir o banco inteiro toda vez que alguém chuta 42.

## 9. Autoridade da partida

No multiplayer, o navegador pede; o servidor decide.

Operações críticas devem passar por funções Postgres/RPC, como:

- criar sala;
- entrar em sala;
- iniciar partida;
- obter próxima pergunta;
- enviar palpite;
- fechar rodada;
- calcular pontuação;
- avançar rodada;
- encerrar partida.

As funções validam estado, jogador e permissões antes de gravar.

O frontend só apresenta o resultado.

## 10. Estado da sala

Estados principais:

- `lobby`
- `playing`
- `finished`
- `expired`

Estados da rodada:

- `waiting`
- `accepting_guesses`
- `revealing`
- `finished`

Não inventar 27 estados porque alguém descobriu que enum existe.

## 11. Realtime sem desperdício

Regras:

- um canal por sala;
- canal fechado ao sair da partida;
- presence só se realmente ajudar na experiência;
- nada de mandar evento a cada tecla digitada;
- palpite só gera evento quando é confirmado;
- resposta dos outros nunca é transmitida antes da revelação;
- placar completo pode ser buscado após evento `round_finished`, em vez de retransmitido repetidamente.

## 12. Conteúdo e cache

Perguntas mudam pouco. Isso é ótimo.

Categorias e metadados públicos podem ser cacheados no cliente.

O app pode guardar em IndexedDB/localStorage:

- categorias;
- preferências;
- últimos IDs vistos;
- sessão local;
- configurações de acessibilidade.

A resposta correta não deve ser pré-carregada junto com a pergunta antes da hora.

## 13. Perguntas

Pergunta é dado editorial, não código.

O banco precisa permitir adicionar, corrigir, desativar e versionar perguntas sem redeploy do site.

Uma pergunta publicada pode ser desativada se:

- a fonte mudou;
- a resposta envelheceu;
- ficou ambígua;
- alguém descobriu que publicamos uma cagada.

## 14. Custos que não entram

No MVP não entra:

- Vercel Pro;
- Supabase Pro;
- banco extra;
- Redis pago;
- R2 pago;
- CDN adicional;
- servidor VPS;
- serviço pago de fila;
- IA por pergunta;
- observabilidade paga;
- domínio obrigatório.

## 15. Limites gratuitos que precisam ser respeitados

Premissas validadas em agosto de 2026:

- Cloudflare Pages Free: 500 builds/mês; assets estáticos sem cobrança por request.
- Workers Free, se usados: 100 mil requests/dia.
- Supabase Free: 2 projetos ativos por conta elegível, 500 MB de banco por projeto, 50 mil MAU, 5 GB de egress, 2 milhões de mensagens realtime/mês e 200 conexões realtime de pico.

Esses números não são licença para desperdiçar. São teto.

## 16. O que acontece se chegar perto do teto

Nada de upgrade automático.

A ordem é:

1. medir o que está consumindo;
2. remover desperdício;
3. aumentar cache;
4. reduzir eventos realtime;
5. arquivar dados antigos;
6. limitar criação abusiva de salas;
7. só então discutir plano pago.

Se estivermos batendo 200 conexões realtime simultâneas com gente jogando, ótimo: finalmente temos um problema que merece conversa de dinheiro.

## 17. Observabilidade mínima

Precisamos saber:

- erros de criação/entrada em sala;
- falhas de RPC;
- reconexões;
- rodada travada;
- taxa de abandono;
- consumo aproximado do Supabase e Realtime.

Sem guardar payload sensível ou resposta de jogador em log só porque é fácil.

## 18. Deploy

Fluxo desejado:

`main` → build → Cloudflare Pages → produção.

PR/branch pode gerar preview quando for útil.

Banco deve usar migrations versionadas no repositório.

Mudança de regra de pontuação ou schema sem migration é pedir para o futuro Luiz mandar o presente Luiz tomar no cu.

## 19. Regra final

O Na Mosca precisa conseguir nascer, receber usuário, manter sala e medir resultado sem cartão de crédito adicional.

Quando começar a gerar receita ou o uso justificar claramente um upgrade, reavaliamos.

Até lá, eficiência faz parte do produto.