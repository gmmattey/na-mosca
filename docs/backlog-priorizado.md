# Na Mosca — backlog priorizado

> Isso aqui existe para impedir que a gente comece pelo placar global antes de o chute funcionar.

## Fase 0 — fundação

Objetivo: projeto saudável e reproduzível.

- revisar scaffold atual;
- instalar dependências;
- CI verde;
- TypeScript estrito;
- estrutura de domínio separada da UI;
- configuração local documentada;
- Supabase CLI preparado;
- vínculo futuro com `auê-games` definido;
- sem deploy pago.

**Gate:** testes e typecheck verdes.

## Fase 1 — motor solo

Objetivo: provar a regra sem interface final.

- validar motor de pontuação existente;
- validar ranking;
- validar limites;
- migrations iniciais `nm_*`;
- RPC de pergunta solo;
- RPC de palpite solo;
- proteção da resposta correta;
- testes de contrato SQL quando ambiente local estiver disponível.

**Gate:** pergunta entra sem resposta e palpite devolve resultado oficial correto.

## Fase 2 — conteúdo

- importar somente perguntas aprovadas;
- categorias;
- seed repetível;
- evitar repetição imediata;
- filtro por categoria/dificuldade;
- registrar versão/data da pergunta.

**Gate:** 40+ perguntas aprovadas e jogáveis.

## Fase 3 — UI solo

Depende do protótipo.

- home;
- início imediato;
- pergunta;
- entrada numérica;
- timer;
- confirmação;
- revelação visual;
- pontuação;
- próxima pergunta;
- resultado final;
- jogar de novo;
- compartilhar.

**Gate:** usuário novo completa 10 perguntas sem explicação externa.

## Fase 4 — analytics baseline

- eventos mínimos solo;
- funil completo;
- erros técnicos;
- compartilhamento;
- revanche;
- sem anúncios ainda.

**Gate:** conseguimos medir do `game_opened` ao `rematch_started`.

## Fase 5 — multiplayer

- Auth anônimo;
- criar sala;
- código/link;
- entrar por nickname;
- host;
- configuração 5/10 rodadas;
- mesma pergunta simultânea;
- submissão secreta;
- fechamento autoritativo;
- reveal coletivo;
- ranking;
- reconexão;
- transferência de host;
- revanche.

**Gate:** 3+ dispositivos completam uma partida real sem intervenção manual.

## Fase 6 — compartilhamento e viralidade

- Open Graph por jogo;
- resultado compartilhável;
- convite com deep link para sala;
- medição `invite_opened → invite_joined`;
- copy curta e engraçada;
- fallback para copiar link.

## Fase 7 — segurança/privacidade/lançamento

- checklist de segurança;
- política/termos públicos;
- idade/classificação revisadas;
- expiração/limpeza;
- rate limit;
- Turnstile onde necessário;
- checklist de produção completo.

## Fase 8 — beta público

- círculos de teste;
- 30–100 jogadores;
- observar conclusão/revanche/compartilhamento;
- corrigir quebra real;
- revisar perguntas ruins;
- nenhuma mídia paga.

## Fase 9 — monetização experimental

Só depois de baseline.

- escolher um único ponto natural de anúncio;
- medir impacto na revanche;
- bloqueio de categorias incompatíveis;
- sem publicidade comportamental para menores;
- opção futura de remover anúncios.

**Gate:** receita precisa justificar o custo em retenção.

## Depois — somente se os dados pedirem

- desafio do dia;
- streak;
- histórico;
- conta permanente;
- estatísticas avançadas;
- pacotes especiais;
- custom challenge;
- ranking amplo.

## Fora até segunda ordem

- chat;
- DM;
- avatar 3D;
- clan;
- moeda virtual;
- loot box;
- aposta;
- IA gerando pergunta automaticamente;
- app nativo só porque sim;
- qualquer serviço que gere boleto antes de receita.

## Regra de prioridade

Quando aparecer ideia nova, perguntar:

1. aumenta chance de completar a primeira partida?
2. aumenta revanche?
3. aumenta compartilhamento/convite?
4. protege segurança/integridade?
5. ajuda receita sem matar 1–3?

Se a resposta for “não” pra tudo, vai pro estacionamento.