# Na Mosca — contratos do motor de jogo

> Regra não mora em botão. O botão pede. O motor decide.

## 1. Objetivo

Separar a lógica do Na Mosca da interface.

O motor precisa conseguir responder às perguntas principais do jogo sem saber se a tela é React, PWA, app nativo ou um terminal preto de hacker de filme.

Isso evita regra espalhada em componente visual e permite testar o jogo sem abrir navegador.

## 2. Fonte de verdade

No solo, o frontend pode calcular prévias para animação, mas o resultado oficial devolvido pela operação de revelação é autoritativo.

No multiplayer, pontuação, ranking e avanço de rodada são sempre autoritativos no backend/RPC.

Se cliente e servidor discordarem, o servidor ganha. Fim.

## 3. Tipos básicos

Exemplo conceitual em TypeScript:

```ts
type QuestionId = string;
type PlayerId = string;
type RoundId = string;

type Difficulty = 'easy' | 'medium' | 'hard';

type GuessInput = {
  playerId: PlayerId;
  value: number;
  submittedAt: string;
};

type ScoredGuess = GuessInput & {
  errorPercent: number;
  points: number;
  rank?: number;
  exact: boolean;
};
```

Esses tipos são contrato de domínio. Não precisam carregar estado de modal, cor de botão ou nome da animação.

## 4. `validateGuess`

Responsabilidade: dizer se um palpite pode ser aceito.

Entrada:

```ts
validateGuess({
  value,
  minGuess,
  maxGuess,
  deadline,
  now,
  alreadySubmitted
})
```

Saída:

```ts
{ ok: true }
```

ou

```ts
{
  ok: false,
  reason: 'empty' | 'not_numeric' | 'below_min' | 'above_max' | 'late' | 'already_submitted'
}
```

O motor devolve motivo técnico curto. A UI transforma isso em texto humano.

## 5. `calculateErrorPercent`

Responsabilidade: calcular a distância percentual absoluta entre palpite e resposta.

Regra canônica:

```text
abs(guess - correct) / correct * 100
```

Pré-condição do MVP: `correct > 0`.

Exemplos:

- correto 100, palpite 100 → 0%
- correto 100, palpite 105 → 5%
- correto 100, palpite 50 → 50%
- correto 100, palpite 900 → 800%

Arredondamento para exibição é problema da UI. A comparação usa precisão suficiente para não criar empate falso.

## 6. `scoreGuess`

Responsabilidade: converter erro percentual em pontos.

Tabela canônica do MVP:

```text
erro = 0%       -> 1000
erro <= 1%      -> 900
erro <= 5%      -> 750
erro <= 10%     -> 600
erro <= 25%     -> 400
erro <= 50%     -> 200
erro > 50%      -> 50
sem resposta    -> 0
```

Contrato:

```ts
scoreGuess(correct: number, guess: number): {
  errorPercent: number;
  points: number;
  exact: boolean;
}
```

A ordem das faixas importa.

## 7. `rankGuesses`

Responsabilidade: ordenar os palpites da rodada por proximidade.

Entrada:

```ts
rankGuesses(correct, guesses)
```

Saída:

Lista de `ScoredGuess` ordenada por:

1. menor `errorPercent`;
2. em empate exato, ambos ocupam a mesma posição lógica;
3. tempo de resposta não muda pontos no MVP.

Não transformar velocidade em vantagem escondida.

## 8. `resolveRound`

Responsabilidade: resolver uma rodada completa.

Entrada conceitual:

```ts
resolveRound({
  roundId,
  correctAnswer,
  guesses,
  eligiblePlayers
})
```

Saída:

```ts
{
  roundId,
  results: ScoredGuess[],
  missingPlayers: PlayerId[],
  winnerPlayerIds: PlayerId[],
  exactHitPlayerIds: PlayerId[]
}
```

Jogador elegível sem palpite recebe 0.

O motor não inventa resposta por ele.

## 9. `applyRoundScores`

Responsabilidade: somar resultado da rodada ao placar atual.

Entrada:

```ts
applyRoundScores(currentScores, roundResults)
```

Saída:

```ts
Record<PlayerId, number>
```

O placar não pode aceitar score vindo do cliente.

## 10. `resolveGameRanking`

Responsabilidade: classificar o placar final.

Critérios:

1. maior pontuação total;
2. mais acertos exatos;
3. menor erro percentual acumulado;
4. persistindo empate, vitória compartilhada.

Contrato conceitual:

```ts
resolveGameRanking(playerStats): FinalStanding[]
```

## 11. `classifySoloScore`

Responsabilidade: transformar o total de uma partida solo de 10 perguntas em uma classificação divertida.

Faixas iniciais:

```text
0–1999       Chutou de olhos fechados
2000–3999    Confiante sem motivo
4000–5999    Sabe umas coisas
6000–7499    Quase especialista
7500–8999    Perigosamente bom
9000–10000   Vai tomar no cu, você sabia as respostas?
```

A copy pode mudar sem alterar a mecânica.

## 12. Escolha de pergunta

Contrato de domínio:

```ts
selectQuestion({
  availableQuestions,
  excludedQuestionIds,
  categoryFilter,
  difficultyMix
}): QuestionId
```

Regras:

- não repetir pergunta na mesma partida;
- respeitar categoria configurada;
- priorizar mistura de dificuldade em partida padrão;
- nunca selecionar `draft` ou `disabled`;
- resultado pode usar aleatoriedade, mas precisa aceitar RNG injetável em teste.

## 13. Estado da partida solo

Estado mínimo:

```ts
type SoloGameState = {
  status: 'idle' | 'playing' | 'finished';
  questionIndex: number;
  totalQuestions: number;
  score: number;
  usedQuestionIds: string[];
  exactHits: number;
};
```

Transições permitidas:

```text
idle -> playing -> finished
```

Não precisa FSM de doutorado para dez perguntas.

## 14. Estado multiplayer

```ts
type RoomStatus = 'lobby' | 'playing' | 'finished' | 'expired';
type RoundStatus = 'waiting' | 'accepting_guesses' | 'revealing' | 'finished';
```

Transições válidas:

```text
room: lobby -> playing -> finished
round: waiting -> accepting_guesses -> revealing -> finished
```

Uma operação que tenta pular estado deve falhar.

Exemplo: enviar palpite quando a rodada já está em `revealing` retorna erro. Não “aceita porque chegou quase junto”.

## 15. Comandos de domínio multiplayer

Os nomes finais podem variar, mas o comportamento precisa existir.

### `createRoom`

Valida configuração e cria sala em `lobby`.

### `joinRoom`

Valida código, expiração, capacidade e apelido.

### `startGame`

Somente host.

Pré-condições:

- sala em `lobby`;
- mínimo de jogadores atendido;
- configuração válida.

### `startRound`

Seleciona pergunta não usada, cria deadline e coloca rodada em `accepting_guesses`.

### `submitGuess`

Valida jogador, deadline e duplicidade.

### `closeRound`

Pode ocorrer quando:

- todos os jogadores ativos responderam; ou
- deadline terminou.

Resolve resultados e passa para `revealing`.

### `finishRound`

Depois da janela de revelação, marca rodada como `finished`.

### `advanceGame`

Se ainda houver rodada, inicia próxima.

Se acabou, encerra partida.

## 16. Reconexão

O motor diferencia jogador da conexão.

Cair da internet não cria outro participante.

Ao reconectar com o mesmo `user_id`:

- reassocia ao registro existente;
- recupera estado permitido da sala;
- não permite reenviar palpite já confirmado;
- se perdeu a rodada, segue para a próxima com 0 naquela rodada.

## 17. Idempotência

Comando importante precisa tolerar retry.

Exemplo clássico: usuário toca em Enviar, internet engasga e o frontend tenta novamente.

`submitGuess` deve usar a restrição única `(round_id, player_id)` e devolver o resultado existente ou erro controlado, nunca criar dois palpites.

O mesmo vale para iniciar/fechar rodada.

## 18. Erros de domínio

Padronizar códigos, por exemplo:

- `ROOM_NOT_FOUND`
- `ROOM_EXPIRED`
- `ROOM_FULL`
- `NOT_ROOM_MEMBER`
- `NOT_HOST`
- `INVALID_ROOM_STATE`
- `ROUND_NOT_ACCEPTING_GUESSES`
- `GUESS_ALREADY_SUBMITTED`
- `GUESS_TOO_LATE`
- `INVALID_GUESS`
- `QUESTION_NOT_AVAILABLE`

A UI traduz para linguagem do jogo.

Nunca usar texto de banco como copy final.

## 19. Testes obrigatórios do motor

Antes de UI bonita, o motor precisa provar:

- todas as faixas de pontuação;
- fronteiras exatas de 1%, 5%, 10%, 25% e 50%;
- palpite abaixo da resposta;
- palpite acima da resposta;
- empate de proximidade;
- vários acertos exatos;
- não respondeu;
- ranking final empatado;
- tentativa de resposta duplicada;
- resposta após deadline;
- repetição de pergunta;
- reconexão sem duplicar jogador.

## 20. Vetores canônicos de teste

Resposta correta: `100`.

```text
100 -> 1000
101 -> 900
105 -> 750
110 -> 600
125 -> 400
150 -> 200
151 -> 50
900 -> 50
```

Esses exemplos viram testes automatizados.

Se alguém mudar a função e quebrar esses casos sem mudar a especificação primeiro, o CI deve reclamar.

## 21. Regra final

A interface pode mudar completamente depois do protótipo.

O motor não deveria dar a mínima.

Se redesenhar uma tela obriga a reescrever regra de pontuação, a separação ficou uma merda.