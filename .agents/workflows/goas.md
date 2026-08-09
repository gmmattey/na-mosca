---
description: Executa uma entrega ponta a ponta no Chuta Essa! com Giam, Guinho e Marcelinho, incluindo retrabalho automático até passar nos gates.
---

# /goas — Chuta Essa!

Quando o usuário executar `/goas <demanda>`, orquestre a entrega usando `.agents/agents.md`, `AGENTS.md` e as skills do projeto.

## 1. Giam — plano

1. Ler `AGENTS.md` e as fontes canônicas relacionadas à demanda.
2. Confirmar comportamento alvo, recorte e o que fica fora.
3. Definir requisitos de aceite verificáveis.
4. Se houver UI e `docs/design/design-system/` existir, executar `usarDesignSystemChutaEssa` e tratá-lo como fonte visual operacional principal: ler `README.md`, tokens, componentes, guidelines e UI kit aplicável antes de desenhar qualquer coisa.
5. Se o Design System ainda não estiver importado, usar `docs/identidade-visual.md`, `docs/regras-design-e-copy.md`, `docs/jornada-ux-ui.md` e protótipo aprovado.
6. Definir arquitetura e impactos Web/PWA, Android e iOS.
7. Resolver sozinho decisões técnicas reversíveis já cobertas pelas fontes.

**Parar somente** se faltar decisão real de produto ou existir condição de parada do `AGENTS.md`.

## 2. Guinho — implementação

1. Sincronizar base limpa.
2. Usar branch/worktree isolada quando estiver fazendo mudança real.
3. Implementar uma fatia vertical completa.
4. Se o Design System estiver no repo, reutilizar primeiro tokens, componentes e padrões existentes. Criar componente novo só quando não houver equivalente adequado.
5. Manter regra fora da UI e adapters por canal.
6. Não vazar resposta correta antes da revelação.
7. Escrever/ajustar testes junto.
8. Rodar validação disponível antes de entregar ao Marcelinho.

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
- fidelidade ao protótipo e, quando presente, ao Design System canônico;
- uso correto de tokens/componentes existentes;
- violações dos anti-patterns visuais/copy;
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

Conferir os requisitos do plano um a um. Procurar feature não pedida, mock escondido, integração falsa, estado não verificado ou desvio visual do Design System.

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
