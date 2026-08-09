---
description: Executa uma entrega ponta a ponta no Chuta Essa! com Giam, Guinho e Marcelinho, incluindo retrabalho automático até passar nos gates.
---

# /goas — Chuta Essa!

Quando o usuário executar `/goas <demanda>`, orquestre a entrega usando `.agents/agents.md`, `AGENTS.md` e as skills do projeto.

## 1. Giam — plano

1. Ler `AGENTS.md` e as fontes canônicas relacionadas à demanda.
2. Confirmar comportamento alvo, recorte e o que fica fora.
3. Definir requisitos de aceite verificáveis.
4. Se houver UI, executar `usarDesignSystemChutaEssa` para linguagem visual e `usarPrototipoChutaEssa` para composição, sequência e estados aprovados.
5. Ler `docs/design/prototipos/chuta-essa-v1/README.md` e `HANDOFF.md` antes de especificar uma tela já prototipada.
6. Se não houver protótipo para o estado pedido, usar jornada, Design System e regras anti-IA sem inventar nova feature.
7. Definir arquitetura e impactos Web/PWA, Android e iOS.
8. Resolver sozinho decisões técnicas reversíveis já cobertas pelas fontes.

**Parar somente** se faltar decisão real de produto ou existir condição de parada do `AGENTS.md`.

## 2. Guinho — implementação

1. Sincronizar base limpa.
2. Usar branch/worktree isolada quando estiver fazendo mudança real.
3. Implementar uma fatia vertical completa.
4. Reutilizar tokens, componentes e padrões existentes do Design System.
5. Respeitar a composição e sequência do protótipo aprovado quando a tela estiver coberta pelo handoff.
6. Manter regra fora da UI e adapters por canal.
7. Não vazar resposta correta antes da revelação.
8. Escrever/ajustar testes junto.
9. Rodar validação disponível antes de entregar ao Marcelinho.

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
- fidelidade ao Design System;
- fidelidade à composição e sequência do protótipo aprovado;
- uso correto de tokens/componentes existentes;
- violações dos anti-patterns visuais/copy;
- nenhuma tela futura/suporte entrou no MVP por acidente;
- nenhum anúncio entrou entre palpite e revelação;
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

Conferir os requisitos do plano um a um. Procurar feature não pedida, mock escondido, integração falsa, estado não verificado, desvio visual do Design System ou desvio de jornada do protótipo aprovado.

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