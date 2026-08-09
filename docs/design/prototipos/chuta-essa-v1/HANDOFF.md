# Handoff visual — Chuta Essa! v1

Este documento transforma o protótipo aprovado em instrução implementável sem depender do runtime do editor de design.

## Regras gerais

- mobile-first, referência 390×844 e funcional a partir de 360 px;
- fundo escuro no gameplay;
- Barlow Condensed para números/display e Barlow para interface/corpo;
- uma tela, um protagonista;
- CTA principal alcançável pelo polegar;
- nada de card soup, bento, glassmorphism, glow ou gradiente genérico;
- safe areas de Android/iOS obrigatórias;
- copy curta e falada;
- componentes e tokens vêm de `docs/design/design-system/`;
- regra do jogo nunca é inferida deste arquivo quando já existe em `docs/documentacao-funcional.md`.

## 01 — Splash / Loading

**Objetivo:** entrada curta enquanto o app prepara o estado inicial.

Composição:

- marca `Chuta Essa!` centralizada;
- indicador simples de carregamento;
- fundo de gameplay;
- sem marketing, carrossel ou CTA.

Não segurar o jogador artificialmente nesta tela.

## 02 — Onboarding: mecânica

**Quando aparece:** somente na primeira utilização.

**Pode pular:** sim.

Mensagem central:

> Chuta um número.

Explica em uma frase que cada rodada traz uma pergunta, o jogador chuta e depois vê a resposta.

Visual de apoio usa a geometria de alvo/proximidade da marca, sem ilustração genérica.

CTA: **Próxima**.

## 03 — Onboarding: pontuação

Mensagem central:

> Perto vale mais.

Usar `ProximityScale` para ensinar proximidade sem mostrar fórmula.

Explicar em uma frase que acertar exatamente vale o máximo e errar muito ainda pode render poucos pontos.

CTA: **Entendi**.

## 04 — Home

Objetivo: colocar a pessoa numa partida em poucos segundos.

Hierarquia:

1. marca;
2. frase curta;
3. pequeno exemplo/pergunta de clima do jogo, sem virar feed;
4. **Jogar agora**;
5. **Criar sala**;
6. **Entrar em sala**.

Sem login obrigatório, ranking global, catálogo ou banner de anúncio antes da primeira partida.

## 05 — Pergunta / Palpite

É a tela principal do produto.

Topo:

- categoria discreta;
- `Timer`.

Centro:

- pergunta;
- `GuessInput` gigante;
- unidade sempre visível.

Rodapé:

- CTA **Chutar**.

Regras:

- teclado numérico;
- palpite trava depois do envio;
- não revelar resposta nem palpite de outro jogador antes da hora;
- não transformar o campo num input de formulário SaaS.

## 06 — Revelação / resultado da rodada

É o principal payoff visual.

Sequência percebida:

1. estado de proximidade;
2. resposta correta em número grande;
3. palpite do jogador;
4. `ProximityScale`;
5. curiosidade curta;
6. pontos da rodada;
7. **Próxima**.

A pontuação exibida precisa vir da regra canônica, nunca de cálculo visual improvisado.

Estado exato usa **CRAVOU!**.

No solo, esta tela já é o resultado da rodada; não criar uma tela intermediária desnecessária só para mostrar pontos.

## 07 — Resultado final solo

Mostrar:

- pontuação total;
- classificação divertida;
- quantidade de acertos exatos;
- melhor aproximação;
- maior desastre;
- **Jogar de novo**;
- **Compartilhar**.

A tela conta a história da partida sem virar dashboard.

## 08 — Configurações / Som

**Status:** suporte/futuro; fora da fatia solo MVP inicial.

Referência visual para quando houver necessidade real.

Itens atualmente aceitáveis como conceito:

- som;
- vibração/haptics quando suportado e justificado;
- sobre o jogo.

**Notificações não fazem parte deste protótipo canônico**, pois não existe requisito funcional atual que as peça.

## 09 — Erro / Sem conexão / Timeout

Estado de erro precisa falar como gente.

Exemplo:

> Sem conexão
>
> Verifica sua internet e tenta de novo.

Ações:

- **Tentar de novo**;
- **Voltar para o início** quando fizer sentido.

Não transformar falha em falso sucesso. Timeout de rodada segue a regra funcional de 0 ponto e continuidade quando o jogador já está em partida.

## 10 — Anúncio intersticial

**Status:** FUTURO — FORA DO MVP.

Não implementar na fatia solo inicial.

Se monetização for ativada no futuro:

- nunca no meio da pergunta;
- nunca depois de `Chutar` e antes da revelação;
- somente numa pausa natural depois do resultado/reveal;
- frequência definida por decisão de produto e experimento, não por este desenho.

## 11 — Criar sala

Objetivo: configurar uma partida em poucos toques.

Host escolhe:

- **5 ou 10 rodadas**;
- **categorias**;
- **10 / 20 / 30 segundos**.

Defaults devem vir selecionados para evitar formulário cansativo.

A seleção de categorias pode usar chips/pills do Design System. `Todas` pode ser o default visual, sem alterar a lista funcional de categorias do jogo.

CTA: **Criar sala**.

## 12 — Entrar em sala

Objetivo: entrar por código sem fricção.

Mostrar entrada curta do código da sala e instrução simples.

Por link de convite, o código deve poder vir resolvido automaticamente na implementação.

A jornada funcional também exige apelido quando necessário; não transformar isso em cadastro ou conta.

CTA: **Entrar**.

## 13 — Sala / Lobby

Mostrar:

- código da sala;
- ação para copiar/compartilhar;
- jogadores conectados;
- resumo das regras da sala, como `10 perguntas · 20s`;
- CTA **Começar** para o host.

A lista de participantes não precisa parecer ranking competitivo antes da primeira pergunta; o componente `RankRow` pode ser reaproveitado visualmente com pontos zerados se continuar claro como lista de jogadores.

## 14 — Resultado da sala

Mostrar:

- campeão/ordem final;
- pontos;
- **Jogar de novo**;
- **Sair da sala** / compartilhar conforme a jornada final.

Revanche mantém sala, jogadores e configurações e usa perguntas novas.

Desempate segue exclusivamente a documentação funcional.

## O que o protótipo ainda não fecha sozinho

O board mostra entrada/lobby/resultado multiplayer, mas não substitui a especificação funcional das rodadas multiplayer. A implementação das perguntas, palpites secretos, revelação conjunta e ranking entre rodadas deve reutilizar os padrões solo e obedecer `docs/documentacao-funcional.md`.

## Gate de aceite visual

Antes de aceitar uma implementação, Marcelinho deve verificar:

- sequência da jornada;
- protagonista de cada tela;
- fidelidade ao Design System;
- ausência de UI genérica de IA;
- responsividade;
- safe areas;
- acessibilidade;
- estados de loading/erro/timeout;
- nenhuma feature futura entrando no MVP por acidente.
