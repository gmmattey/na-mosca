---
name: desenharInterface
description: Transforma UX, Design System e protótipo aprovado em especificação visual fiel e implementável no Chuta Essa!.
---

# desenharInterface

Procedimento do **Giam** para UI.

## Antes de desenhar

1. Leia `docs/jornada-ux-ui.md`, `docs/regras-design-e-copy.md` e `docs/brief-prototipo.md`.
2. Execute `usarDesignSystemChutaEssa` e leia o Design System aplicável.
3. Se a tela estiver coberta por `docs/design/prototipos/chuta-essa-v1/`, execute `usarPrototipoChutaEssa` e leia `README.md` + `HANDOFF.md`.
4. Use `docs/identidade-visual.md` como contexto de origem, não para sobrescrever Design System ou protótipo aprovados.

## Regra principal

**Giam não redesenha o que já foi aprovado. Ele aplica e completa apenas as lacunas reais.**

O Design System define linguagem visual e componentes. O protótipo aprovado define composição, sequência e estados da jornada. A documentação funcional continua mandando na regra do jogo.

Só crie decisão visual nova quando as fontes realmente não cobrirem o caso. A decisão deve ser pequena, reversível e coerente com os padrões existentes.

Antes de pedir componente novo ao Guinho, confirme que nenhum componente existente resolve a necessidade por composição ou variante.

## O que especificar

Somente o necessário para o Guinho implementar:

- tela/estado do handoff que está sendo construído;
- hierarquia;
- componente/variante existente a reutilizar;
- token de cor/tipo/espaçamento/efeito;
- estados;
- movimento;
- toque/teclado;
- acessibilidade;
- safe areas;
- comportamento responsivo;
- exceção justificada quando as fontes não cobrirem o caso.

## Regras duras do Chuta Essa!

- uma tela, um protagonista;
- pergunta e número são elementos de jogo, não formulário de SaaS;
- Barlow Condensed é display/número; Barlow é corpo/interface;
- o gameplay parte da base escura e do lima do Design System;
- não preencher vazio com card;
- sem gradiente, glow, blur decorativo, glassmorphism ou bento grid;
- movimento curto e funcional;
- cor nunca é o único sinal de proximidade;
- CTA principal precisa funcionar bem no polegar em tela pequena;
- nenhuma UI nova pode contrariar regra do jogo para obedecer estética;
- anúncio nunca entra entre palpite e revelação;
- tela marcada como suporte/futuro no protótipo não entra automaticamente na fatia MVP.

## Gate anti-freestyle

Se a proposta:

- recria `Button`, `GuessInput`, `Timer`, `ProximityScale`, `ProximityBadge`, `ScoreCounter`, `RoomCodeCard`, `RankRow` ou `ShareCard` sem necessidade real;
- ignora token e usa valor solto por conveniência;
- muda a composição de uma tela aprovada sem motivo funcional;
- parece template genérico de IA;
- adiciona decoração sem função de jogo;

ela volta antes de implementação.

## Conflitos

Regra funcional vence protótipo e design.

Design System vence documentos visuais antigos no que diz respeito a token, componente, medida, tipografia, motion e padrão visual.

Protótipo aprovado vence improviso de composição e sequência quando não houver conflito funcional.

Se existir conflito material de branding ou produto entre fontes canônicas, Giam aponta a contradição em vez de escolher escondido.

Se o design poderia ser de qualquer SaaS trocando o logo, devolva e redesenhe.