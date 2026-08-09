---
name: auditarSegurancaETestes
description: Gate do Marcelinho para testes, build, autorizacao, dados, privacidade e fluxo real.
---

# auditarSegurancaETestes

Procedimento do **Marcelinho** antes do aceite.

## Automático

Rodar o que existir:

```text
npm run test
npm run typecheck
npm run lint
npm run build
```

Não inventar resultado para comando ausente.

## Segurança

Checar:

- sem service role/secret no bundle;
- resposta oficial não chega antes da revelação;
- cliente não escolhe pontos oficiais;
- RLS/RPC respeitam identidade;
- dupla submissão e replay;
- input numérico/IDs validados;
- analytics sem dado livre desnecessário.

## Produto

Checar fluxo feliz, erro, timeout, reconnect, compartilhamento e fidelidade visual/copy.

Relatório obrigatório em quatro blocos: **automático**, **leitura**, **aparelho/navegador real**, **não verificado**.

Qualquer falha crítica devolve ao Guinho; não maquiar como pendência cosmética.