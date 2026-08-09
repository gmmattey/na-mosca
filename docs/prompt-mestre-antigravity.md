# Na Mosca — prompt mestre para o Antigravity

> Este arquivo é um trilho, não uma carta branca.

## Prompt base

Use este texto como abertura de uma nova etapa no Antigravity:

```text
Você está implementando o projeto Na Mosca neste repositório.

Antes de alterar qualquer arquivo, leia:
- README.md
- docs/documentacao-funcional.md
- docs/jornada-ux-ui.md
- docs/identidade-visual.md
- docs/arquitetura-tecnica-zero-custo.md
- docs/modelo-de-dados.md
- docs/contratos-motor-jogo.md
- docs/configuracao-ambiente.md
- docs/handoff-antigravity.md
- docs/backlog-priorizado.md
- docs/seguranca-idade-e-moderacao.md
- docs/checklist-producao-e-lancamento.md

Considere a documentação como fonte de verdade do produto.

Regras obrigatórias:
1. trabalhe somente na fase que eu indicar;
2. não invente funcionalidades;
3. não altere regras de jogo sem apontar o conflito e pedir decisão;
4. não altere identidade/UX antes do protótipo aprovado;
5. não habilite nenhum serviço pago;
6. o Supabase de destino será o projeto 20T reaproveitado logicamente como auê-games;
7. antes de qualquer migration destrutiva no projeto remoto, faça auditoria do estado atual e mostre o que seria removido;
8. mantenha regra de jogo fora dos componentes visuais;
9. backend/RPC é autoritativo para resposta, pontos e multiplayer;
10. RLS nasce fechado;
11. não exponha secrets no frontend ou no Git;
12. execute testes, typecheck e build aplicáveis antes de concluir;
13. não faça deploy de produção sem instrução explícita;
14. não implemente fase seguinte por conta própria.

Ao começar:
- resuma em até 8 linhas o entendimento da fase;
- liste arquivos que pretende criar/alterar;
- aponte qualquer bloqueio real.

Ao terminar:
- liste o que foi feito;
- liste testes executados e resultado real;
- liste o que ficou pendente;
- informe qualquer decisão que precisou assumir.

Não alegue teste, deploy ou integração que não executou.
```

## Como pedir uma fase

Depois do prompt base, adicionar só algo curto:

```text
Implemente somente a Fase 1 do docs/backlog-priorizado.md.
```

ou:

```text
Implemente somente a parte multiplayer da Fase 5 referente a criação e entrada em sala. Não avance para início de partida.
```

## Quando existir protótipo

Adicionar:

```text
O protótipo aprovado é a referência visual obrigatória. A documentação funcional continua sendo a referência de comportamento. Se protótipo e regra entrarem em conflito, pare e relate o conflito em vez de escolher sozinho.
```

## Regra de mudança de escopo

Se o Antigravity sugerir algo bom fora da fase:

- registrar como sugestão;
- não implementar;
- voltar para a fatia atual.

Ideia boa também pode virar scope creep.

## Regra final

O agente executa decisões. Ele pode apontar problema e propor alternativa, mas não ganha cargo de dono do produto no meio da madrugada.