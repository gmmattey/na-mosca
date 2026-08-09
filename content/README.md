# Conteúdo do Na Mosca

> Esta pasta é bancada de cozinha. O que está aqui não vai automaticamente para o prato do cliente.

## O que existe agora

`perguntas-iniciais.csv` contém o primeiro lote editorial de perguntas candidatas.

Distribuição atual:

- 5 Brasil
- 5 Mundo
- 5 Ciência e natureza
- 5 Tecnologia
- 5 Corpo humano
- 5 Esportes
- 5 Cinema e TV
- 5 Música
- 5 Comida
- 5 Curiosidades absurdas

Total: **50 perguntas candidatas**.

## Importante: `candidate` não é status do banco

O CSV usa uma camada editorial mais rica:

- `candidate`
- `approved`
- `published`
- `disabled`

O schema do Supabase usa:

- `draft`
- `published`
- `disabled`

Ao importar:

- `candidate` → `draft`
- `approved` → `draft`
- `published` → `published`
- `disabled` → `disabled`

**Nunca converter `candidate` para `published` automaticamente.**

## Revisão antes de publicar

Cada linha precisa passar por duas revisões separadas.

### 1. Revisão factual

Confirmar:

- URL ainda abre;
- fonte realmente sustenta o número;
- versão/data do dado está correta;
- unidade está correta;
- arredondamento não mudou o sentido;
- não existe outra resposta igualmente defensável.

### 2. Revisão de diversão

Perguntar:

- dá para chutar?
- a escala é interessante?
- o reveal entrega alguma surpresa?
- a pergunta parece conversa ou prova?
- eu gostaria de ver isso em uma partida de 10 perguntas?

Se a fonte estiver perfeita e a pergunta for um porre, ela continua fora.

## Regras para o Antigravity

Quando chegar a etapa de implementação:

1. ler `docs/padrao-editorial-perguntas.md`;
2. não publicar todas as linhas só porque estão no CSV;
3. criar rotina de importação idempotente por `id` editorial;
4. manter `source_label`, `source_url` e `reference_date`;
5. preservar precisão numérica no banco;
6. não alterar o texto editorial silenciosamente;
7. não gerar perguntas novas por IA para completar quantidade;
8. não substituir fonte oficial por outra mais fácil de raspar;
9. não misturar duas perguntas do mesmo objeto na mesma partida quando `editorial_notes` alertar isso.

## IDs editoriais

Formato atual:

- `BR-*` Brasil
- `MU-*` Mundo
- `CN-*` Ciência e natureza
- `TE-*` Tecnologia
- `CH-*` Corpo humano
- `ES-*` Esportes
- `CT-*` Cinema e TV
- `MS-*` Música
- `CO-*` Comida
- `CA-*` Curiosidades absurdas

O ID é estável mesmo se o texto for revisado.

Não reciclar ID de pergunta removida para outro conteúdo.

## Perguntas relacionadas

Algumas perguntas usam o mesmo objeto ou a mesma fonte.

Exemplos:

- Torre Eiffel;
- Canal do Panamá;
- Terra/Lua;
- iPhone original;
- anatomia óssea;
- campo de futebol;
- instrumentos de corda;
- pizza recordista.

No futuro podemos adicionar um `content_group` explícito ao modelo editorial.

Por enquanto, as restrições estão descritas em `editorial_notes`.

O selecionador de perguntas deve evitar colocar duas perguntas do mesmo objeto numa mesma partida quando isso tornaria a segunda resposta fácil demais ou repetitiva.

## Próxima meta de conteúdo

Não precisamos correr para 500.

Sequência recomendada:

1. revisar as 50 atuais;
2. publicar as melhores 30–40;
3. jogar partidas reais;
4. identificar categorias fracas;
5. chegar a 100 com base no que funcionou;
6. só então pensar em escala maior.

A pergunta que ninguém gostou de jogar não melhora porque temos outras 4.999 iguais ao lado.

## Regra final

**Qualidade do banco é parte da mecânica.**

O Na Mosca vive do momento entre “acho que é isso” e “puta merda, era isso tudo?”.

Se a pergunta não cria esse momento, ela é só uma linha no CSV.