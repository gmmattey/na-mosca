# Workflow GOAS — Chuta Essa!

Quando a demanda pedir `GOAS`, executar este fluxo sem pular etapa.

## 1. Giam — plano

1. Ler `AGENTS.md` e as fontes da demanda.
2. Confirmar comportamento alvo e o que fica fora.
3. Definir requisitos de aceite verificáveis.
4. Se houver UI: usar jornada, identidade, regras anti-IA e protótipo aprovado.
5. Definir arquitetura e impactos Web/Android/iOS.
6. Não perguntar decisão técnica pequena ao primo.

**Parar somente** se faltar decisão de produto real ou houver condição de parada do `AGENTS.md`.

## 2. Guinho — implementação

1. Sincronizar base limpa.
2. Usar branch/worktree isolada quando estiver fazendo mudança real.
3. Implementar uma fatia vertical completa.
4. Manter regra fora da UI e adapters por canal.
5. Não vazar resposta correta antes da revelação.
6. Escrever/ajustar testes junto.
7. Rodar validação disponível antes de entregar ao Marcelinho.

## 3. Marcelinho — revisão adversarial

Tentar quebrar a entrega.

Checar:

- regra de pontuação e limites;
- resposta oficial escondida;
- dupla submissão/timeout;
- autorização/RLS/RPC quando aplicável;
- regressões;
- modularidade;
- acessibilidade;
- fidelidade ao protótipo/Design System;
- card soup, fonte genérica e copy de IA;
- Web/PWA;
- impacto Android/iOS/Capacitor.

Executar os gates existentes (`test`, `typecheck`, `lint`, `build`).

## 4. Loop de correção

Se Marcelinho reprovar, não reportar como entrega final.

`Marcelinho → Guinho → Marcelinho`

Se a causa for decisão de produto:

`Marcelinho → Giam → Guinho → Marcelinho`

Repetir até aprovação ou bloqueio real.

## 5. Giam — aceite

Conferir os requisitos do plano um a um. Procurar feature não pedida, mock escondido, integração falsa ou estado não verificado.

Saída: `ACEITO`, `ACEITO COM PENDÊNCIA REGISTRADA` ou `DEVOLVIDO`.

## 6. Entrega

Só chamar de pronto o que foi validado.

Relatar ao primo em linguagem simples:

- o que ficou pronto;
- o que foi verificado;
- o que não foi verificado;
- bloqueio real, se houver;
- próximo passo.

Não fazer deploy, publicação em loja, custo, merge não solicitado ou mudança destrutiva no modo GOAS sem autorização explícita.