# Na Mosca — configuração de ambiente

> Configurar o necessário, não montar uma usina nuclear para rodar um jogo de chute.

## 1. Objetivo

Deixar claro o que o ambiente local precisa ter para o Antigravity implementar e testar sem depender de segredo perdido em mensagem antiga.

## 2. Ferramentas locais esperadas

- Node.js LTS atual
- npm
- Git
- Supabase CLI
- acesso ao repositório GitHub
- acesso ao projeto Supabase físico hoje chamado `20T`, que será tratado logicamente como `auê-games`

Cloudflare CLI só entra quando formos validar deploy/Pages localmente.

## 3. Variáveis públicas do frontend

Criar localmente um `.env.local` com:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Quando Turnstile entrar:

```env
VITE_TURNSTILE_SITE_KEY=
```

Esses nomes formam o contrato da aplicação.

## 4. Segredos que NÃO podem ir para o frontend

Nunca colocar em variável `VITE_*`:

- `SUPABASE_SERVICE_ROLE_KEY`
- token pessoal do Supabase
- token do GitHub
- segredo do Turnstile
- qualquer chave administrativa futura

Tudo com prefixo `VITE_` pode parar no bundle do navegador. Portanto, trate como público.

## 5. Variáveis administrativas locais

Quando for necessário operar CLI/automação localmente, podem existir no ambiente da máquina, nunca commitadas:

```env
SUPABASE_ACCESS_TOKEN=
SUPABASE_PROJECT_REF=
```

O `SUPABASE_PROJECT_REF` deve ser o ref do projeto físico hoje chamado `20T`.

## 6. Arquivos de ambiente

Commitar:

- `.env.example`

Não commitar:

- `.env`
- `.env.local`
- `.env.production.local`
- qualquer arquivo com segredo real

## 7. Supabase local

A implementação deve preferir primeiro o Supabase local para testar migrations e RPCs.

Fluxo desejado:

```text
supabase start
-> aplicar migrations locais
-> executar testes/validações
-> só então vincular ao projeto remoto
```

Não usar o projeto remoto como laboratório de tentativa e erro.

## 8. Vinculação ao remoto

Quando a base estiver validada localmente:

```text
supabase login
supabase link --project-ref <REF_DO_20T>
```

A partir desse momento, tratar o projeto como infraestrutura lógica `auê-games`.

Antes de qualquer `db push`, executar a auditoria do estado atual do 20T e comparar com as migrations planejadas.

## 9. Cloudflare Pages

O deploy inicial esperado é:

```text
main -> Cloudflare Pages -> na-mosca.pages.dev
```

Build command esperado:

```text
npm run build
```

Diretório de saída esperado:

```text
dist
```

Nenhum plano pago deve ser necessário.

## 10. GitHub Actions

CI mínimo:

```text
npm ci
npm test
npm run typecheck
```

Quando a aplicação visual existir, adicionar build:

```text
npm run build
```

Não colocar segredo de produção no workflow se o job não precisar dele.

## 11. `.env.example`

Modelo esperado:

```env
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=SUA_CHAVE_PUBLICA
VITE_TURNSTILE_SITE_KEY=
```

Sem valor real.

## 12. Regra final

Qualquer pessoa — ou agente — com acesso ao repositório deve conseguir entender **quais configurações existem** sem ter acesso aos valores secretos.

Configuração documentada. Segredo fora do Git. É isso.