---
name: garantirMultiplataforma
description: Garante que a mesma feature nasca preparada para Web/PWA, Android e iOS via Capacitor.
---

# garantirMultiplataforma

Procedimento do **Guinho**; Marcelinho revisa.

Para cada feature:

- regra e estado ficam compartilhados;
- APIs específicas ficam em adapters;
- detectar `platform` e `distribution_channel` por configuração, não por gambiarra de user-agent;
- web continua produto completo sem instalação;
- Android respeita back, teclado, background, safe area e share/deep link;
- iOS respeita safe area, teclado, share sheet, background e WebView;
- recurso indisponível em um canal degrada de forma clara, sem quebrar o jogo.

Não criar três implementações da mesma regra.

Antes de declarar pronto, informar separadamente o que foi validado em navegador, Android e iOS. Se não houve aparelho/simulador, marcar **NÃO VERIFICADO EM APARELHO**.