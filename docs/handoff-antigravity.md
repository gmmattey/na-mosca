# Na Mosca — handoff para implementação local com Antigravity

> Aqui termina a definição e começa a execução. O agente pode construir. Não pode reinventar o jogo no caminho.

## 1. Papel deste documento

Este arquivo explica para o Antigravity o que já está decidido, o que ainda precisa ser implementado localmente e quais decisões não devem ser alteradas sem uma mudança explícita na documentação funcional.

A implementação deve partir da documentação existente como fonte de verdade.

## 2. Ordem de leitura obrigatória

Antes de alterar código, ler nesta ordem:

1. `README.md`
2. `docs/documentacao-funcional.md`
3. `docs/jornada-ux-ui.md`
4. `docs/identidade-visual.md`
5. `docs/brief-prototipo.md`
6. `docs/arquitetura-tecnica-zero-custo.md`
7. `docs/modelo-de-dados.md`
8. `docs/contratos-motor-jogo.md`
9. este documento
10. `docs/plano-implementacao.md`

Se houver conflito entre README e documentação funcional, **a documentação funcional ganha**.

Se houver conflito entre interface e regra de jogo, **a regra de jogo ganha**.

## 3. O que já existe no repositório

Existe uma base técnica inicial, feita apenas para adiantar definição e contratos:

- motor de pontuação em `src/domain/scoring.ts`;
- testes em `tests/scoring.test.ts`;
- migrations iniciais do Supabase em `supabase/migrations/`;
- RPC inicial do modo solo;
- workflow de CI.

Isso é **bootstrap de referência**, não autorização para assumir que tudo está pronto ou validado em produção.

O Antigravity deve revisar, executar localmente e corrigir o que for necessário antes de expandir.

## 4. Regra de infraestrutura

O jogo precisa funcionar usando os planos gratuitos já existentes.

Nome lógico da infraestrutura compartilhada dos jogos:

`auê-games`

O projeto físico do Supabase a ser reaproveitado é o projeto atualmente chamado **20T**.

Não criar outro projeto Supabase.
Não contratar serviço novo.
Não habilitar recurso pago.
Não cadastrar cartão adicional.

Se uma solução exigir custo antes de receita, procurar outra solução.

## 5. Stack definida

- React
- TypeScript
- Vite
- PWA mobile-first
- Cloudflare Pages
- Supabase Free
- Supabase Auth anônimo
- Postgres
- Supabase Realtime somente no multiplayer
- RLS em tudo que for exposto
- RPC/Postgres para operações autoritativas
- Vitest
- GitHub Actions

Não trocar stack porque apareceu uma biblioteca mais bonita no Hacker News.

## 6. Coisas que o Antigravity pode decidir

Pode decidir detalhes locais de implementação como:

- organização interna de componentes;
- hooks;
- nomes de arquivos auxiliares;
- utilitários;
- pequenas abstrações;
- estratégia de estado local;
- biblioteca leve de ícones;
- técnica de animação compatível com o protótipo;
- testes adicionais;
- melhorias de legibilidade e manutenção.

Desde que não altere comportamento funcional ou custo da arquitetura.

## 7. Coisas que o Antigravity NÃO pode decidir sozinho

Não pode mudar sem alterar primeiro a documentação e justificar:

- sistema de pontuação;
- faixas de erro;
- duração padrão das partidas;
- fluxo solo;
- regras multiplayer;
- monetização;
- obrigação ou não de login;
- estrutura de autoridade cliente/servidor;
- exposição da resposta correta antes da revelação;
- stack de infraestrutura;
- criação de serviço pago;
- identidade visual principal;
- inclusão de feature fora do MVP.

Também não deve implementar feature futura “porque já estava fácil”.

Fácil também vira manutenção.

## 8. Regra de segurança

O frontend nunca é fonte autoritativa para:

- resposta correta;
- pontuação oficial;
- ranking multiplayer;
- avanço oficial da rodada;
- resultado da partida.

A chave `service_role` do Supabase nunca entra no frontend e nunca é commitada.

A chave pública/anon pode ficar no frontend conforme o modelo do Supabase, com RLS corretamente configurado.

## 9. Regra de banco

Tudo do Na Mosca usa prefixo:

`nm_`

Toda mudança de schema precisa virar migration versionada.

Não editar produção manualmente e depois tentar lembrar o que mudou.

Antes de aplicar qualquer migration no projeto 20T/`auê-games`, auditar o estado atual do projeto conforme a arquitetura técnica.

## 10. Prototipação

A implementação visual definitiva deve esperar o protótipo aprovado.

Antes do protótipo, podem ser implementados e testados:

- domínio;
- banco;
- RPC;
- autenticação anônima;
- serviços/adapters;
- testes;
- fixtures;
- seed de conteúdo;
- fluxo técnico sem acabamento visual.

Não gastar horas polindo uma Home que provavelmente será redesenhada.

## 11. Qualidade mínima

Antes de considerar uma fatia concluída:

- `npm test` verde;
- `npm run typecheck` verde;
- sem segredo commitado;
- migrations reproduzíveis;
- regra de domínio coberta por teste;
- nenhum erro conhecido escondido atrás de `any`;
- nenhum custo recorrente novo;
- documentação atualizada se o comportamento realmente mudou.

## 12. Forma de trabalhar

Preferir fatias pequenas e completas.

Exemplo bom:

`obter pergunta solo -> enviar palpite -> calcular resultado -> testar`

Exemplo ruim:

`criar 47 componentes, sistema de conquistas, perfil e ranking global antes de conseguir terminar uma pergunta`.

## 13. Se encontrar uma decisão faltando

Não inventar uma regra importante silenciosamente.

Quando a decisão afetar:

- mecânica;
- monetização;
- custo;
- privacidade;
- segurança;
- jornada principal;

parar a decisão específica e registrar claramente a dúvida para Luiz decidir.

Para detalhes puramente técnicos e reversíveis, o agente pode decidir e seguir.

## 14. Resultado esperado

Quando a implementação local começar, o objetivo é transformar a documentação existente em produto sem deixar a arquitetura crescer mais rápido que o jogo.

O Na Mosca precisa primeiro ser divertido.
Depois precisa ser estável.
Depois precisa trazer gente.
Só então ganha o direito de ficar sofisticado.