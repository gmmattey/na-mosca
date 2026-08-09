---
name: usarPrototipoChutaEssa
description: Usa o protótipo v1 aprovado do Chuta Essa! como fonte de composição, sequência e estados de tela sem deixar o desenho sobrescrever regra funcional ou Design System.
---

# usarPrototipoChutaEssa

Fonte: `docs/design/prototipos/chuta-essa-v1/`.

## Ordem de leitura

1. `docs/design/prototipos/chuta-essa-v1/README.md`;
2. `docs/design/prototipos/chuta-essa-v1/HANDOFF.md`;
3. `docs/documentacao-funcional.md` para conferir regra;
4. `docs/design/design-system/` para implementação visual;
5. `docs/regras-design-e-copy.md` como gate anti-IA.

## O que o protótipo decide

- sequência visual aprovada;
- hierarquia da tela;
- protagonista visual;
- agrupamento/composição;
- estados de loading, erro e suporte desenhados;
- relação entre telas da jornada.

## O que o protótipo NÃO decide

- pontuação;
- regra de rodada;
- autorização/backend;
- escopo só porque uma tela foi desenhada;
- tokens/componentes diferentes do Design System;
- frequência de anúncio;
- feature futura.

Regra funcional vence protótipo. Design System vence improviso visual.

## Jornada solo MVP aprovada

`Splash → onboarding na primeira utilização (pulável) → Home → Pergunta/Palpite → Revelação/resultado da rodada → próxima pergunta → Resultado final → Jogar de novo/Compartilhar`

Não existe anúncio nesse caminho.

## Estados fora da fatia solo inicial

- Configurações/Som: suporte/futuro;
- anúncio intersticial: futuro, fora do MVP;
- sala/multiplayer: outra fatia de implementação.

Nenhum deles entra automaticamente numa entrega solo.

## Gate para Giam

Antes de especificar UI, diga qual tela/estado do handoff está sendo implementado e o que fica fora.

## Gate para Guinho

Não redesenhar composição sem necessidade funcional. Implementar com tokens/componentes canônicos e adaptar apenas para produção, responsividade, acessibilidade e plataformas.

## Gate para Marcelinho

Reprovar quando:

- a sequência mudou sem decisão de produto;
- anúncio entrou entre palpite e revelação;
- onboarding virou barreira recorrente;
- tela futura entrou no MVP por acidente;
- composição virou card soup/template genérico;
- protótipo foi usado para justificar regra que contradiz a documentação funcional.
