repo: gmmattey/na-mosca
branch: main
path: docs/design/design-system

## Status

Design System v1 importado no repositório em 2026-08-09 como fonte visual operacional do Chuta Essa!.

### Origem

- O produto originalmente tinha documentação de identidade/UX, mas não tinha um logo oficial versionado nem UI de produção.
- O Design System v1 consolidou tokens, componentes, guidelines, UI kit e os assets canônicos atuais em `assets/`.
- Barlow/Barlow Condensed, paleta, tom, anti-patterns e hierarquia vieram das decisões documentadas do produto.
- Componentes e UI kit foram derivados das jornadas em `docs/jornada-ux-ui.md` e `docs/brief-prototipo.md`.
- Exemplos de perguntas vêm do banco real `content/perguntas-iniciais.csv`.

## Screen map

| Design System | Fonte de produto |
|---|---|
| `README.md` / fundamentos visuais | `docs/identidade-visual.md`, `docs/regras-design-e-copy.md` |
| `ui_kits/chuta-essa/` | `docs/jornada-ux-ui.md`, `docs/brief-prototipo.md`, `docs/documentacao-funcional.md` |
| sala multiplayer | `docs/documentacao-funcional.md` |
| conteúdo das perguntas | `content/perguntas-iniciais.csv` |

## Regra de sincronização

Regra funcional vence Design System. Design System vence improviso visual e documentos visuais antigos em token, componente, tipografia, medida, motion e padrão de interface.

Mudança de marca, token ou componente canônico deve acontecer aqui primeiro; implementação não cria um Design System paralelo escondido em `src/`.
