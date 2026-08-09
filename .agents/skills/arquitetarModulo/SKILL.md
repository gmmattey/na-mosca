---
name: arquitetarModulo
description: Define uma fatia modular, barata, segura e multiplataforma antes de codificar.
---

# arquitetarModulo

Procedimento do **Giam**.

Antes do Guinho começar, decidir:

- comportamento e requisito de aceite;
- fronteira de domínio/UI/backend;
- quem é autoritativo;
- dados que podem chegar ao cliente;
- adapters necessários por plataforma/canal;
- testes obrigatórios;
- impacto em migrations/RLS;
- o que fica explicitamente fora.

Regras:

- regra do jogo não mora em componente React;
- resposta oficial e score não são confiados ao cliente;
- usar `nm_*` no banco;
- uma base para Web/Android/iOS;
- sem serviço pago antes de receita;
- não criar pacote compartilhado cedo só por estética arquitetural;
- mudança destrutiva exige autorização.

Preferir a solução mais simples, reversível e testável que respeite os contratos canônicos.