# AGENTS.md — autoridade do Chuta Essa!

Este arquivo define como agentes trabalham neste repositório. O jogo público se chama **Chuta Essa!**; `na-mosca` é apenas slug técnico legado.

## 1. Fontes canônicas

Leia nesta ordem quando a demanda tocar o assunto:

1. `docs/00-nome-canonico.md` — nome público.
2. `docs/documentacao-funcional.md` — regra do jogo e comportamento.
3. `docs/jornada-ux-ui.md` — fluxo e UX.
4. `docs/design/design-system/` — quando presente, é a fonte visual operacional principal: tokens, componentes, guidelines, assets, UI kit e skill de design.
5. `docs/identidade-visual.md` — direção visual e contexto de origem.
6. `docs/regras-design-e-copy.md` — trava anti-IA; continua obrigatória mesmo com Design System.
7. `docs/brief-prototipo.md` — escopo do protótipo.
8. `docs/arquitetura-tecnica-zero-custo.md` — arquitetura e custo.
9. `docs/modelo-de-dados.md` e `docs/contratos-motor-jogo.md` — dados e regras autoritativas.
10. `docs/backlog-priorizado.md` e `docs/plano-implementacao.md` — ordem de implementação.
11. código/migrations/testes — verdade do que já está implementado; divergência com intenção deve ser explicitada, não escondida.

Regra funcional vence preferência visual. Quando o Design System estiver importado, ele vence improviso visual e documentos visuais antigos no que disser respeito a token, componente, medida, tipografia, motion e padrão de interface. `docs/regras-design-e-copy.md` continua podendo barrar resultado com cheiro de IA. Nenhum agente inventa feature para preencher espaço.

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

Quando `docs/design/design-system/` existir, ele é obrigatório para qualquer trabalho visual. Antes de criar CSS, componente, asset ou motion novo, consultar o que já existe no sistema.

O Design System atual define, entre outras coisas:

- Barlow Condensed para display/números e Barlow para corpo/interface;
- verde-lima `#B9F34A` sobre base escura `#111315` como eixo do gameplay;
- números como protagonista visual;
- ausência de gradiente, glassmorphism, glow, card soup e bento grid;
- movimento curto e funcional;
- composição mobile-first e pouca densidade;
- componentes próprios para palpite, timer, proximidade, score, sala, ranking e compartilhamento.

`docs/regras-design-e-copy.md` continua sendo gate obrigatório contra resultado genérico ou com cheiro de IA.

Não passa:

- card soup, bento gratuito, glassmorphism ou SaaS genérico;
- fonte escolhida por inércia de template/IA;
- copy tipo “prepare-se para uma experiência incrível”;
- texto que explica o óbvio;
- layout que poderia ser de qualquer app trocando só o logo;
- recriar componente que o Design System já resolve sem justificar a necessidade.

Se houver conflito interno no próprio Design System, Giam resolve usando produto e documentação canônica; se a contradição mudar identidade/branding de forma material, vira dúvida de produto e pode parar o GOAS.

## 6. Modo GOAS

Quando a demanda disser `GOAS`, `modo goas` ou usar o comando `/goas`, seguir `.agents/workflows/goas.md` e a skill `executarGOAS`.

GOAS significa executar ponta a ponta com correção automática entre os agentes. Não significa ignorar bloqueios reais ou fingir validação.

Só parar por: dúvida real de produto sem resposta nas fontes, credencial, custo, ação pública/irreversível, mudança destrutiva de dados, decisão legal/comercial ou conflito canônico material.

## 7. Gates mínimos

Antes de chamar implementação de pronta, rodar o que existir no projeto:

```text
test
typecheck
lint
build
```

Também verificar segurança/autorização e fluxo real afetado. Se algo não pôde ser executado, escrever **NÃO VERIFICADO**.

Se houver UI e Design System importado, Marcelinho também deve verificar fidelidade contra tokens, componentes, guidelines, anti-patterns e UI kit aplicável.

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

A `SKILL.md` que acompanha o Design System deve ser importada junto com o bundle visual e usada como especialização adicional de interface, sem substituir esta governança.