---
name: executarGOAS
description: Orquestra Giam, Guinho e Marcelinho ate aceite ou bloqueio real, sem entregar defeito conhecido.
---

# executarGOAS

Leia primeiro `AGENTS.md` e `.agents/workflows/GOAS.md`.

## Protocolo

1. **Giam** produz plano e critérios verificáveis.
2. **Guinho** implementa a fatia inteira e valida o básico.
3. **Marcelinho** revisa de forma adversarial.
4. Se houver defeito, retornar automaticamente ao Guinho e repetir revisão.
5. Se surgir lacuna de produto, Giam tenta resolver pelas fontes; só então pergunta ao primo se continuar realmente ambígua.
6. **Giam** confere o aceite final.
7. Relatar apenas o estado verdadeiro da entrega.

## Não interromper por

- nome interno;
- organização de arquivo;
- teste adicional;
- refactor reversível;
- escolha técnica equivalente;
- correção necessária para fazer a própria fatia funcionar.

## Interromper por

- credencial faltante;
- custo/upgrade;
- deploy/publicação;
- destruição de dados;
- decisão legal/comercial;
- produto realmente ambíguo;
- autorização externa necessária.

GOAS não garante ausência matemática de bugs. Ele garante uma coisa mais útil: **nenhuma entrega é chamada de pronta com falha conhecida ou validação inventada**.