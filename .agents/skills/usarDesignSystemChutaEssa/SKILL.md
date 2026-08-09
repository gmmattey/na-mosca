---
name: usarDesignSystemChutaEssa
description: Obriga Giam, Guinho e Marcelinho a usar o Design System v1 canônico do Chuta Essa! antes de criar, implementar ou revisar qualquer UI.
---

# usarDesignSystemChutaEssa

Fonte visual canônica: `docs/design/design-system/`.

## Ordem de leitura

Quando a demanda tocar UI, leia apenas o que for aplicável, nesta ordem:

1. `docs/design/design-system/README.md`;
2. `docs/design/design-system/tokens/*.css`;
3. componente e `*.prompt.md` aplicáveis;
4. guideline aplicável;
5. tela correspondente em `docs/design/design-system/ui_kits/chuta-essa/`;
6. `docs/regras-design-e-copy.md` como gate anti-IA.

## Giam

- aplica o Design System antes de inventar decisão visual nova;
- usa o UI kit como referência de hierarquia e composição, não como desculpa para mudar regra funcional;
- só define novo token, componente ou padrão quando existe lacuna real;
- se a lacuna for pequena e reversível, resolve sem interromper o GOAS;
- conflito material de marca ou identidade volta para o primo.

## Guinho

- reutiliza token e componente existente antes de criar outro;
- não copia valores soltos se existe token equivalente;
- não cria uma segunda biblioteca visual paralela em `src/`;
- pode adaptar a implementação para produção, responsividade, acessibilidade e Capacitor sem mudar a linguagem visual;
- Web, Android e iOS devem compartilhar o mesmo sistema visual sempre que tecnicamente possível.

## Marcelinho

Na revisão, compara a entrega com:

- tokens;
- componentes;
- guidelines;
- anti-patterns;
- UI kit aplicável;
- regras anti-IA do projeto.

Reprova quando houver freestyle sem justificativa, componente duplicado, token ignorado, card soup, bento gratuito, glassmorphism, glow, gradiente genérico, fonte fora do sistema ou copy com cheiro de IA.

## Marca v1

Os assets em `docs/design/design-system/assets/` são canônicos nesta versão:

- `logo-icon.svg`;
- `logo-icon-app.svg`;
- `favicon.svg`;
- `wordmark-dark.svg`;
- `wordmark-light.svg`.

Implementação não improvisa outro símbolo ou wordmark.

## Precedência

Regra funcional sempre vence Design System.

O Design System vence documentos visuais antigos no que diz respeito a token, componente, tipografia, medida, movimento e padrão de interface.

`docs/regras-design-e-copy.md` continua podendo barrar uma solução mesmo quando ela usa tokens corretos: usar a cor certa numa tela com cara de IA continua sendo uma merda.

## O que não é fonte canônica

Artefatos gerados por ferramenta de exportação, thumbnails, bundles de preview e HTMLs gerados não mandam no produto. A fonte é o conteúdo versionado em `README.md`, `tokens/`, `components/`, `guidelines/`, `assets/` e `ui_kits/`.
