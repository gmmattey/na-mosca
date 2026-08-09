---
name: desenharExperiencia
description: Define UX por estado, acao, sensacao, erro e saida antes da implementacao.
---

# desenharExperiencia

Procedimento do **Giam**.

Para cada mudança, escreva:

1. **entrada** — de onde o jogador veio;
2. **protagonista** — qual informação/ação manda na tela;
3. **ação principal** — o que o jogador faz;
4. **feedback imediato** — o que ele percebe após agir;
5. **sucesso** — para onde segue;
6. **erro/timeout/offline** — como continua sem beco sem saída;
7. **reconexão** — quando aplicável;
8. **saída** — próximo estado.

Use `docs/jornada-ux-ui.md` e `docs/documentacao-funcional.md`. Não crie estado novo para resolver detalhe visual.

O Chuta Essa! precisa continuar rápido: pergunta, palpite, revelação e comparação. Se a UX exige palestra, formulário ou cinco confirmações, simplifique.