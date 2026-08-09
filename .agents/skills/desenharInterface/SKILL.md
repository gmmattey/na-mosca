---
name: desenharInterface
description: Transforma UX e Design System aprovado em especificacao visual fiel e implementavel no Chuta Essa!.
---

# desenharInterface

Procedimento do **Giam** para UI.

## Antes de desenhar

1. Leia `docs/jornada-ux-ui.md`, `docs/regras-design-e-copy.md` e `docs/brief-prototipo.md`.
2. Se `docs/design/design-system/` existir, leia primeiro o `readme.md`, a `SKILL.md`, os tokens, guidelines, componentes e o UI kit aplicável.
3. Use `docs/identidade-visual.md` como contexto de origem, não para sobrescrever um Design System aprovado.

## Regra principal

**Giam não redesenha o Design System. Ele o aplica.**

Só crie decisão visual nova quando o sistema realmente não cobrir o caso. A decisão deve ser pequena, reversível e coerente com os tokens e padrões existentes.

Antes de pedir componente novo ao Guinho, confirme que nenhum componente existente resolve a necessidade por composição ou variante.

## O que especificar

Somente o necessário para o Guinho implementar:

- hierarquia;
- componente/variante existente a reutilizar;
- token de cor/tipo/espaçamento/efeito;
- estados;
- movimento;
- toque/teclado;
- acessibilidade;
- safe areas;
- comportamento responsivo;
- exceção justificada quando o Design System não cobrir o caso.

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
- nenhuma UI nova pode contrariar regra do jogo para obedecer estética.

## Gate anti-freestyle

Se a proposta:

- recria `Button`, `GuessInput`, `Timer`, `ProximityScale`, `ProximityBadge`, `ScoreCounter`, `RoomCodeCard`, `RankRow` ou `ShareCard` sem necessidade real;
- ignora token e usa valor solto por conveniência;
- parece template genérico de IA;
- adiciona decoração sem função de jogo;

ela volta antes de implementação.

## Conflitos

Regra funcional vence design.

Quando houver conflito entre documentos visuais antigos e Design System aprovado, o Design System vence no que diz respeito a token, componente, medida, tipografia, motion e padrão visual.

Se o próprio Design System se contradizer em algo material de branding, não escolha escondido: Giam aponta a contradição e resolve com o primo quando a decisão mudar identidade pública.

Se o design poderia ser de qualquer SaaS trocando o logo, devolva e redesenhe.