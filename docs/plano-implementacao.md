# Na Mosca — plano de implementação

> Fazer na ordem certa economiza mais tempo que codar rápido a coisa errada.

## 1. Objetivo

Transformar a documentação do Na Mosca em produto real sem misturar definição, infraestrutura, conteúdo e interface numa massa só.

O trabalho deve avançar em fatias pequenas, testáveis e reversíveis.

## 2. Fase 0 — preparar o terreno

Antes de desenvolver feature:

- clonar e abrir o repositório localmente;
- instalar dependências;
- rodar testes e typecheck;
- revisar o bootstrap técnico existente;
- instalar/configurar Supabase CLI;
- auditar o projeto Supabase 20T;
- confirmar que ele pode assumir a função lógica `auê-games`;
- registrar qualquer dependência antiga encontrada antes de remover coisa.

### Saída da fase

Ambiente local saudável, sem alteração destrutiva no remoto.

## 3. Fase 1 — domínio do jogo

Consolidar primeiro o motor puro.

Implementar/revisar:

- validação de palpite;
- erro percentual;
- pontuação;
- ranking;
- empate;
- resultado final solo;
- critérios de desempate multiplayer;
- tipos de domínio.

### Testes obrigatórios

- todas as fronteiras das faixas de pontos;
- valor exato;
- valor abaixo/acima;
- números inválidos;
- empate real;
- ranking estável;
- resposta oficial inválida deve falhar.

### Saída da fase

Motor funcionando sem navegador.

## 4. Fase 2 — banco e segurança local

No Supabase local:

- aplicar schema `nm_*`;
- revisar constraints;
- ativar RLS;
- criar funções de pontuação equivalentes ao domínio;
- criar RPCs do solo;
- validar que resposta correta não fica consultável antes da revelação;
- criar seed mínimo de desenvolvimento.

### Saída da fase

Banco reproduzível por migrations e comportamento autoritativo testado localmente.

## 5. Fase 3 — conteúdo inicial

Montar conteúdo real antes de polir interface.

Meta inicial recomendada:

- 50 perguntas publicáveis para primeira validação interna;
- depois expandir para 100+ antes de divulgação mais ampla.

Cada pergunta deve ter:

- enunciado;
- resposta numérica;
- unidade;
- categoria;
- dificuldade;
- curiosidade da revelação;
- fonte;
- URL da fonte;
- data de referência quando necessária;
- limites de palpite, se fizer sentido.

### Saída da fase

Banco de perguntas bom o suficiente para jogar várias partidas sem sensação de demo vazia.

## 6. Fase 4 — vertical solo técnica

Sem preocupação com visual final.

Construir:

```text
sessão anônima
-> pedir pergunta
-> exibir enunciado simples
-> enviar palpite
-> receber resultado autoritativo
-> mostrar resposta/pontos
-> avançar para próxima
-> fechar 10 perguntas
-> resultado final
```

Pode ser visualmente feio.

O objetivo é provar o fluxo ponta a ponta.

### Saída da fase

Uma partida solo completa funciona tecnicamente.

## 7. Fase 5 — protótipo aprovado entra no jogo

Só depois do protótipo visual:

- implementar design system real;
- Home;
- pergunta;
- entrada de palpite;
- timer;
- suspense/revelação;
- régua de proximidade;
- placar final;
- compartilhamento;
- estados de erro/loading/vazio.

A interface deve consumir o domínio existente. Não reimplementar pontuação dentro de componente.

### Saída da fase

Solo com experiência visual aprovada.

## 8. Fase 6 — PWA e qualidade de lançamento

Adicionar/validar:

- manifest;
- ícones;
- instalação PWA;
- safe areas mobile;
- comportamento offline mínimo para shell;
- acessibilidade;
- performance;
- Open Graph;
- favicon;
- título e metadados;
- compartilhamento Web Share com fallback.

### Saída da fase

Produto solo apresentável para teste público controlado.

## 9. Fase 7 — multiplayer

Só então entrar em salas.

Implementar:

- criar sala;
- código/link;
- entrar por nickname;
- host;
- configurar 5/10 rodadas e timer;
- realtime por sala;
- pergunta simultânea;
- palpite secreto;
- fechamento autoritativo;
- revelação coletiva;
- ranking por rodada;
- placar final;
- revanche;
- reconexão;
- transferência de host.

### Saída da fase

Sala completa de ponta a ponta.

## 10. Fase 8 — proteção contra abuso

Antes de divulgação maior:

- Turnstile onde necessário;
- limite de criação de sala;
- validação de nickname;
- expiração/limpeza de salas;
- revisão de policies RLS;
- tentativa explícita de manipulação por DevTools;
- checagem de vazamento da resposta.

### Saída da fase

Não precisa ser banco suíço. Precisa não ser uma porta aberta com placa de “entre”.

## 11. Fase 9 — analytics mínimo

Instrumentar somente eventos úteis:

- `game_opened`
- `solo_started`
- `round_started`
- `guess_submitted`
- `round_completed`
- `solo_completed`
- `room_created`
- `room_joined`
- `multiplayer_started`
- `multiplayer_completed`
- `rematch_started`
- `share_clicked`
- `invite_opened`

Métricas principais:

- começo -> conclusão;
- conclusão -> revanche;
- conclusão -> compartilhamento;
- convite -> novo jogador;
- abandono por rodada.

## 12. Fase 10 — deploy inicial

Publicar no Cloudflare Pages Free.

URL inicial:

`na-mosca.pages.dev`

Validar:

- build de produção;
- HTTPS;
- PWA;
- compartilhamento;
- metadados sociais;
- mobile real;
- quotas do Supabase;
- nenhum recurso pago habilitado.

## 13. Fase 11 — monetização

Não implementar antes de o loop principal estar bom.

Quando entrar:

- anúncios apenas em pausas naturais;
- nunca durante pergunta/timer/revelação;
- medir impacto em conclusão/revanche;
- premium só se houver proposta clara de valor.

Nenhuma assinatura deve nascer só porque “todo app tem plano premium”.

## 14. Ordem resumida

```text
Ambiente
-> Motor
-> Banco local
-> Conteúdo
-> Solo técnico
-> Protótipo visual
-> Solo bonito
-> PWA
-> Multiplayer
-> Proteção
-> Analytics
-> Deploy
-> Monetização
```

## 15. Regra de corte

Se durante uma fase aparecer uma ideia nova, perguntar:

1. é necessária para provar esta fase?
2. melhora diretamente diversão, retenção, viralização ou receita?
3. custa infraestrutura adicional?
4. aumenta bastante a complexidade?

Se a primeira resposta for não, provavelmente vai para depois.

## 16. Primeiro comando para o Antigravity

O primeiro trabalho local não é “faça o jogo inteiro”.

É:

```text
Leia a documentação do repositório, em especial docs/handoff-antigravity.md e docs/plano-implementacao.md.

Execute somente a Fase 0 e a Fase 1.

Revise o bootstrap técnico existente, rode testes e typecheck, corrija inconsistências e deixe o motor de domínio do Na Mosca validado localmente.

Não implemente UI, multiplayer ou features futuras.
Não altere o Supabase remoto ainda.
Ao final, informe o que foi validado, o que precisou ser corrigido e qualquer decisão que permaneça aberta.
```

Curto, específico e difícil de sair fazendo merda aleatória.