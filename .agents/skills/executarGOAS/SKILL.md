---
name: executarGOAS
description: Orquestra Giam, Guinho e Marcelinho no modo /goas ate aceite ou bloqueio real, com retrabalho automatico e validacao do Design System quando aplicavel.
---

# executarGOAS

Leia primeiro `AGENTS.md` e `.agents/workflows/goas.md`.

## Protocolo

1. **Giam** produz plano e critérios verificáveis.
2. Se a demanda tocar UI e o Design System estiver importado, Giam usa o bundle visual antes de criar qualquer decisão nova.
3. **Guinho** implementa a fatia inteira, reutiliza componentes/tokens existentes e valida o básico.
4. **Marcelinho** revisa de forma adversarial, inclusive fidelidade visual quando aplicável.
5. Se houver defeito, retornar automaticamente ao Guinho e repetir revisão.
6. Se surgir lacuna de produto, Giam tenta resolver pelas fontes; só então pergunta ao primo se continuar realmente ambígua.
7. **Giam** confere o aceite final.
8. Relatar apenas o estado verdadeiro da entrega.

## Não interromper por

- nome interno;
- organização de arquivo;
- teste adicional;
- refactor reversível;
- escolha técnica equivalente já coberta pelas fontes;
- correção necessária para fazer a própria fatia funcionar;
- detalhe visual já respondido pelo Design System.

## Interromper por

- credencial faltante;
- custo/upgrade;
- deploy/publicação;
- destruição de dados;
- decisão legal/comercial;
- produto realmente ambíguo;
- conflito material de branding sem fonte que o resolva;
- autorização externa necessária.

GOAS não garante ausência matemática de bugs. Ele garante uma coisa mais útil: **nenhuma entrega é chamada de pronta com falha conhecida ou validação inventada**.