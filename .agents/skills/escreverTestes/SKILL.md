---
name: escreverTestes
description: Escreve testes junto da mudanca, focando regra, limite, erro e contrato.
---

# escreverTestes

Procedimento do **Guinho**.

Teste não é faxina do fim. Para cada fatia:

- cubra o caminho feliz;
- cubra limites e fronteiras;
- cubra erro/timeout/dupla ação;
- cubra regressão do bug quando houver;
- prefira testar domínio puro sem depender de UI;
- teste contrato de backend/RPC quando a regra for autoritativa.

No Chuta Essa!, pontuação, percentuais, empate, timeout, normalização numérica e ocultação da resposta merecem casos explícitos.

Não escreva teste que apenas repete implementação ou mocka a própria coisa que precisava provar. Se um teste não roda no ambiente disponível, registrar isso.