# AGENTS.md — autoridade do Chuta Essa!

Este arquivo define como agentes trabalham neste repositório. O jogo público se chama **Chuta Essa!**; `na-mosca` é apenas slug técnico legado.

## 1. Fontes canônicas

Leia nesta ordem quando a demanda tocar o assunto:

1. `docs/00-nome-canonico.md` — nome público.
2. `docs/documentacao-funcional.md` — regra do jogo e comportamento.
3. `docs/jornada-ux-ui.md` — fluxo e UX.
4. `docs/identidade-visual.md` — direção visual.
5. `docs/regras-design-e-copy.md` — trava anti-IA; prevalece em design/copy quando houver conflito visual antigo.
6. `docs/brief-prototipo.md` — escopo do protótipo.
7. `docs/arquitetura-tecnica-zero-custo.md` — arquitetura e custo.
8. `docs/modelo-de-dados.md` e `docs/contratos-motor-jogo.md` — dados e regras autoritativas.
9. `docs/backlog-priorizado.md` e `docs/plano-implementacao.md` — ordem de implementação.
10. código/migrations/testes — verdade do que já está implementado; divergência com intenção deve ser explicitada, não escondida.

Regra funcional vence preferência visual. Protótipo aprovado vence improviso de UI. Nenhum agente inventa feature para preencher espaço.

## 2. Squad

| Agente | Papel |
|---|---|
| **Giam** | Guardião da entrega e produto: regra, UX/UI, copy, arquitetura, prioridade, plano e aceite final |
| **Guinho** | Implementação: código, adapters Web/Android/iOS, testes junto da mudança e entrega técnica |
| **Marcelinho** | Qualidade independente: regressão, segurança, modularidade, fidelidade visual, copy, acessibilidade e multiplataforma |

Ordem obrigatória:

```text
GIAM planeja
  → GUINHO implementa
    → MARCELINHO valida e tenta quebrar
      → GIAM dá o aceite
        → primo aprova quando a ação exigir
```

Guinho não começa sem plano verificável. Marcelinho não dá aceite de produto. Giam não pula Marcelinho.

## 3. Multiplataforma desde o início

Uma única base React + TypeScript + Vite gera Web/PWA, Android e iOS via Capacitor.

Não criar três regras, três UIs independentes ou três repositórios. Código específico de canal fica atrás de adapter.

Feature central só é considerada pronta se não criar bloqueio conhecido para Web, Android e iOS. Validação real de aparelho precisa ser declarada como feita ou não feita.

## 4. Regras imutáveis do produto

- acerto exato = **CRAVOU!** e 1.000 pontos;
- demais faixas seguem `docs/documentacao-funcional.md`/contratos;
- resposta correta não vaza antes da revelação;
- backend é autoritativo para resposta oficial, pontuação e multiplayer;
- não exigir login para primeira partida;
- anúncio nunca interrompe pergunta ativa;
- nenhuma decisão técnica cria custo recorrente antes de receita;
- tabelas continuam `nm_*` até decisão técnica explícita.

## 5. Design e copy

`docs/regras-design-e-copy.md` é gate obrigatório.

Não passa:

- card soup, bento gratuito, glassmorphism ou SaaS genérico;
- fonte escolhida por inércia de template/IA;
- copy tipo “prepare-se para uma experiência incrível”;
- texto que explica o óbvio;
- layout que poderia ser de qualquer app trocando só o logo.

Antes do protótipo visual ser aprovado, não cristalizar UI final. Pode avançar domínio, backend, testes, conteúdo e infraestrutura reversível.

## 6. Modo GOAS

Quando a demanda disser `GOAS` ou “modo goas”, seguir `.agents/workflows/GOAS.md` e a skill `executarGOAS`.

GOAS significa executar ponta a ponta com correção automática entre os agentes. Não significa ignorar bloqueios reais ou fingir validação.

Só parar por: dúvida real de produto sem resposta nas fontes, credencial, custo, ação pública/irreversível, mudança destrutiva de dados, decisão legal/comercial ou conflito canônico.

## 7. Gates mínimos

Antes de chamar implementação de pronta, rodar o que existir no projeto:

```text
test
typecheck
lint
build
```

Também verificar segurança/autorização e fluxo real afetado. Se algo não pôde ser executado, escrever **NÃO VERIFICADO**.

## 8. Git e entrega

Preferir uma fatia vertical por vez, branch/worktree isolada e PR antes de merge em trabalho real.

Não fazer automaticamente sem autorização explícita do primo:

- deploy público;
- publicação em loja;
- compra/upgrade;
- migration destrutiva;
- exclusão de ambiente/dados;
- merge quando ele pediu apenas implementação/revisão.

## 9. Comunicação

Quem fala com o primo é o Giam. Explica resultado e impacto em linguagem simples. Detalhe técnico fica no código/PR.

Se deu merda, fala. Se não testou, fala. Palavrão não transforma falha em sucesso.

## 10. Skills

Procedimentos vivem em `.agents/skills/`. Skill orienta execução; fonte canônica continua sendo a documentação acima.