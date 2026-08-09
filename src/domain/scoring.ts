export type GuessScore = {
  guess: number;
  answer: number;
  errorPercent: number;
  points: number;
  exact: boolean;
};

export type RankedGuess = GuessScore & {
  playerId: string;
  rank: number;
};

export function calculateErrorPercent(guess: number, answer: number): number {
  assertFiniteNumber(guess, 'guess');
  assertFiniteNumber(answer, 'answer');

  if (answer <= 0) {
    throw new RangeError('answer must be greater than zero');
  }

  return (Math.abs(guess - answer) / answer) * 100;
}

export function pointsForErrorPercent(errorPercent: number): number {
  assertFiniteNumber(errorPercent, 'errorPercent');

  if (errorPercent < 0) {
    throw new RangeError('errorPercent cannot be negative');
  }

  if (errorPercent === 0) return 1000;
  if (errorPercent <= 1) return 900;
  if (errorPercent <= 5) return 750;
  if (errorPercent <= 10) return 600;
  if (errorPercent <= 25) return 400;
  if (errorPercent <= 50) return 200;
  return 50;
}

export function scoreGuess(guess: number, answer: number): GuessScore {
  const errorPercent = calculateErrorPercent(guess, answer);

  return {
    guess,
    answer,
    errorPercent,
    points: pointsForErrorPercent(errorPercent),
    exact: errorPercent === 0,
  };
}

export function rankGuesses(
  guesses: ReadonlyArray<{ playerId: string; value: number }>,
  answer: number,
): RankedGuess[] {
  const scored = guesses
    .map(({ playerId, value }) => ({ playerId, ...scoreGuess(value, answer) }))
    .sort((a, b) => a.errorPercent - b.errorPercent || a.playerId.localeCompare(b.playerId));

  let previousError: number | undefined;
  let previousRank = 0;

  return scored.map((item, index) => {
    const rank = previousError !== undefined && item.errorPercent === previousError
      ? previousRank
      : index + 1;

    previousError = item.errorPercent;
    previousRank = rank;

    return { ...item, rank };
  });
}

function assertFiniteNumber(value: number, field: string): void {
  if (!Number.isFinite(value)) {
    throw new TypeError(`${field} must be a finite number`);
  }
}
