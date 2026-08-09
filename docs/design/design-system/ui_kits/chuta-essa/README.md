# UI Kit — Chuta Essa!

Referência implementável da jornada solo: Home → Pergunta → Palpite → Chutar → Revelação → Resultado. Também inclui a tela de Sala multiplayer pré-partida.

Fonte: `docs/jornada-ux-ui.md`, `docs/brief-prototipo.md`, `docs/documentacao-funcional.md`. Perguntas reais vêm de `content/perguntas-iniciais.csv`. O layout nasceu da hierarquia documentada: categoria discreta → pergunta → palpite gigante → unidade → cronômetro → CTA.

As telas JSX aqui são **referência visual e estrutural para implementação**, não o motor oficial do jogo. Regra funcional, pontuação, segurança e estado autoritativo continuam nas fontes canônicas do produto.

Guinho pode adaptar wiring, responsividade, acessibilidade e integração Capacitor para produção, mas deve preservar a hierarquia, os tokens e os componentes do Design System salvo justificativa explícita.

Componentes usados: Button, Chip, GuessInput, Timer, ProximityBadge, ProximityScale, ScoreCounter, RoomCodeCard, RankRow — todos de `../../components/`.

Artefatos gerados por exportador (bundle de preview, thumbnail e HTML gerado) não são fonte canônica e podem ser regenerados quando necessário.
