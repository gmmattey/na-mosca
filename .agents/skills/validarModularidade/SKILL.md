---
name: validarModularidade
description: Revisa coesao, dependencia, duplicacao de regra e responsabilidade misturada.
---

# validarModularidade

Procedimento do **Marcelinho**.

Na revisão, procure:

- regra duplicada entre UI/backend/adapters;
- componente decidindo pontuação;
- serviço de plataforma vazando para domínio;
- arquivo monolítico com responsabilidades diferentes;
- dependência circular;
- estado global sem necessidade;
- abstração criada antes de existir repetição real;
- código morto/feature parcial.

Perguntas:

1. Dá para entender onde cada regra mora?
2. Uma mudança na pontuação exigiria alterar quantos lugares?
3. Android/iOS/web compartilham domínio ou estão divergindo?
4. A abstração reduz custo real ou só deixa o diagrama bonito?

Reprovar complexidade que não compra clareza, segurança ou manutenção.