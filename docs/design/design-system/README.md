# Chuta Essa! — Design System

**Chuta Essa!** (repo slug legado: `na-mosca`) é um jogo mobile-first de estimativa numérica: leia uma pergunta, chute um número, trave o palpite e curta a revelação. Solo (10 perguntas, sem login) ou sala com amigos. Uma base React + TypeScript + Vite + Capacitor gera Web/PWA, Android e iOS (fundação compartilhada Auê Games).

Este design system foi construído **inteiramente a partir da documentação de produto do repositório** — não havia código de UI, Figma anexado, nem logo. Fontes usadas (explore para aprofundar):

- Repositório: https://github.com/gmmattey/na-mosca
- `docs/identidade-visual.md`, `docs/regras-design-e-copy.md`, `docs/jornada-ux-ui.md`, `docs/brief-prototipo.md`, `docs/documentacao-funcional.md`, `docs/00-nome-canonico.md`
- Banco de perguntas real: `content/perguntas-iniciais.csv`

Se você tiver acesso ao repositório, vale explorar essas fontes diretamente para aprofundar decisões que este sistema simplificou.

## Nome canônico

O nome público é **Chuta Essa!** (com exclamação). `Na Mosca` foi o working title e não deve aparecer em novos materiais — o repositório manteve o slug técnico por razões de compatibilidade, mas isso não afeta a marca.

## Logo

Nenhum arquivo de logo veio das fontes originais — a documentação apenas descrevia uma direção desejada (alvo/proximidade, dois pontos quase coincidentes, marcador chegando perto do centro). Essa direção foi consolidada no Design System v1 em `assets/`: `logo-icon.svg` (símbolo canônico), `logo-icon-app.svg` (variante para ícone de app), `favicon.svg` (versão simplificada) e `wordmark-dark.svg`/`wordmark-light.svg`. Estes arquivos são os assets canônicos da marca v1 até uma revisão explícita do próprio Design System.

## Intentional additions

Nenhuma fonte definia um inventário de componentes (sem Figma, sem código de UI). O conjunto abaixo foi desenhado a partir dos fluxos de tela documentados em `jornada-ux-ui.md` e `brief-prototipo.md` — cada componente existe porque uma tela documentada precisa dele (não é um kit genérico de SaaS).

## Content fundamentals

- **Tom:** curto, falado, situacional — como alguém jogando uma pergunta na mesa. Nunca copy de marketing.
- **Evitar:** "Prepare-se para uma experiência única", "Desafie seus amigos e divirta-se", três adjetivos genéricos em sequência, microcopy motivacional, piada em toda mensagem.
- **Exemplos reais de copy:** "Chuta essa.", "Manda teu chute.", "Agora já foi.", "Porra. Quase.", "Errou por 0,8%.", "CRAVOU!", "Mais uma?"
- **Pronome:** direto, "você" implícito raramente escrito — a interface fala pouco e deixa o resultado falar.
- **Emoji:** não são usados como personalidade. Sem emoji na interface.
- **Um protagonista por tela:** pergunta, palpite, revelação ou ranking — nunca card para cada elemento.
- **Conteúdo real, nunca lorem ipsum:** usar perguntas do banco (`content/perguntas-iniciais.csv`), como "Em média, quantos quilômetros separam a Terra da Lua?" → resposta 384.400 km.

## Visual foundations

- **Cores:** verde-lima elétrico `#B9F34A` (marca, acerto, CTA principal) sobre fundo escuro `#111315` (base do gameplay). Azul `#53A7FF` para informação/comparação. Laranja `#FF8A3D` para distância e desastre no reveal. Claro `#F5F6F1` para home/institucional. Cor nunca é o único sinal de proximidade — sempre acompanhada de texto/forma/posição.
- **Tipografia:** Barlow Condensed (500–800) para títulos, números e placares; Barlow (400–700) para perguntas, botões e interface. Nunca Inter/Manrope/Space Grotesk/Poppins/DM Sans/Sora por inércia. O número é sempre o protagonista visual — escalas grandes (`--text-guess` chega a 160px).
- **Espaçamento:** escala de 4px (`--space-1` a `--space-9`).
- **Fundo:** sólido, sem gradientes, sem textura, sem grão. Fundo escuro é a base do jogo; fundo claro só em home/institucional/compartilháveis.
- **Movimento:** curto e funcional — nunca decorativo. Durações 120–420ms (`--dur-fast/base/slow`), `--dur-celebrate` (600ms) só para o estado CRAVOU!. Easing `--ease-out` para a maioria, `--ease-spring` reservado à celebração.
- **Hover:** leve clareamento do lima (`--cta-bg-hover`); nunca sombra nova.
- **Press:** escala 0.97 + tom mais escuro do CTA (`--cta-bg-press`) — nunca mudança de cor drástica.
- **Bordas:** finas, 1px, baixa opacidade (`--border-on-dark`/`--border-on-light`) — nunca bordas coloridas de destaque à esquerda.
- **Sombra:** **quase nunca usada.** A tela de jogo é plana. `--shadow-float` existe só para painéis que literalmente flutuam sobre o jogo (sala, modal) — não em cards comuns.
- **Cantos:** discretos (`--radius-sm` 8px, `--radius-md` 12px), pill (`--radius-pill`) só em botões e no rótulo do timer. Cantos não são identidade — o alvo/régua/marcador é.
- **Cards:** evitados por padrão. Uma tela de jogo é uma composição só, não pilha de cards. Cards só aparecem para agrupar uma unidade funcional real (código de sala, resultado final).
- **Layout:** mobile-first, artboard de referência 390×844, funcional a partir de 360px. CTA principal sempre alcançável pelo polegar. Sem hero de SaaS, sem bento grid.
- **Transparência/blur:** não usados como recurso decorativo.
- **Imagens:** nenhuma foi fornecida; a linguagem visual nasce de formas geométricas da mecânica (ponto, régua, marcador, escala), não de fotografia/ilustração.

## Iconography

Nenhum sistema de ícones veio das fontes originais (sem SVGs, sem fonte de ícones, sem sprite no repositório). A linguagem visual principal continua nascendo de formas da mecânica (ponto, régua, marcador, anel, eixo) — não de uma biblioteca genérica — e isso segue valendo para o protagonista de cada tela.

Para os poucos glifos funcionais que a interface realmente precisa (voltar, fechar, compartilhar, som, configurar, copiar código, revanche), este sistema adota **Lucide** via CDN (Iconify), por ser o set de traço fino mais próximo da geometria do resto da identidade (linhas, anéis, círculos). **Substituição sinalizada:** não existia um set oficial; Lucide foi escolhido como equivalente mais próximo do peso de traço da marca, carregado via `<script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js">`. Uso via componente `Icon` (`components/core/Icon.jsx`). Regra: nunca dentro de bolinha colorida, nunca decorativo — só onde texto não resolve. Emoji não são usados.

## Components

Agrupados por pasta em `components/`:

- **core/** — `Button` (primary/secondary/ghost, pill, sem sombra), `Chip` (rótulo tipográfico de categoria), `Icon` (glifos funcionais Lucide, ver Iconography)
- **forms/** — `GuessInput` (campo numérico gigante, protagonista da tela de pergunta)
- **feedback/** — `Timer` (barra discreta), `ProximityScale` (régua da revelação), `ProximityBadge` (estado CRAVOU!/perto/longe), `ScoreCounter` (contagem animada de pontos)
- **room/** — `RoomCodeCard` (único painel com sombra), `RankRow` (linha de ranking)
- **social/** — `ShareCard` (peça quadrada de compartilhamento)

## UI kit

`ui_kits/chuta-essa/` — referência implementável da jornada solo: Home → Pergunta → Palpite → Revelação → Resultado, mais uma tela de Sala multiplayer. Conteúdo real do banco de perguntas. As telas são referência visual/estrutural; regra e estado continuam nas fontes funcionais do produto.

## Index

- `styles.css` — entrypoint (importa `tokens/*`)
- `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css`
- `guidelines/*.card.html` — specimens de cor, tipo, espaçamento, movimento, marca, voz, anti-padrões (aba Design System)
- `components/**` — primitivas React (ver acima)
- `ui_kits/chuta-essa/` — referência implementável das telas e da hierarquia da jornada
- `SKILL.md` — versão portátil para Claude Code
- `github.md` — associação com o repositório fonte

## Caveats

- A importação no repositório preserva apenas fontes canônicas. Artefatos gerados pelo exportador (`_ds_bundle.js`, `_ds_manifest.json`, thumbnails e previews que dependem deles) não mandam no produto e podem ser regenerados quando necessário.
- Sem Figma anexado e sem código de UI no repositório — tudo aqui foi inferido de documentação de produto em português, não de uma implementação existente.
- Os assets em `assets/` são a marca canônica v1 deste Design System. Mudança futura exige revisão explícita de identidade; implementação não deve improvisar substitutos.
- Paleta, tipografia e regras de tom vêm diretamente dos docs; espaçamento, raios e sombras foram inferidos a partir das regras qualitativas (ex.: "cor nunca é único sinal", "sombra quase nunca") já que nenhum valor numérico de grid foi especificado no repo.
