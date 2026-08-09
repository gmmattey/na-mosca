import { describe, expect, it } from 'vitest';
import {
  calculateErrorPercent,
  pointsForErrorPercent,
  rankGuesses,
  scoreGuess,
} from '../src/domain/scoring';

describe('Na Mosca scoring engine', () => {
  it.each([
    [100, 100, 1000],
    [101, 100, 900],
    [105, 100, 750],
    [110, 100, 600],
    [125, 100, 400],
    [150, 100, 200],
    [900, 100, 50],
  ])('scores guess %s against answer %s as %s points', (guess, answer, points) => {
    expect(scoreGuess(guess, answer).points).toBe(points);
  });

  it('calculates absolute percentage error', () => {
    expect(calculateErrorPercent(80, 100)).toBe(20);
    expect(calculateErrorPercent(120, 100)).toBe(20);
  });

  it('keeps boundary values in the intended score band', () => {
    expect(pointsForErrorPercent(1)).toBe(900);
    expect(pointsForErrorPercent(5)).toBe(750);
    expect(pointsForErrorPercent(10)).toBe(600);
    expect(pointsForErrorPercent(25)).toBe(400);
    expect(pointsForErrorPercent(50)).toBe(200);
  });

  it('ranks players by proximity and shares rank on an exact tie', () => {
    const ranking = rankGuesses(
      [
        { playerId: 'ana', value: 80 },
        { playerId: 'luiz', value: 100 },
        { playerId: 'bia', value: 120 },
        { playerId: 'pedro', value: 300 },
      ],
      100,
    );

    expect(ranking.map(({ playerId, rank }) => [playerId, rank])).toEqual([
      ['luiz', 1],
      ['ana', 2],
      ['bia', 2],
      ['pedro', 4],
    ]);
  });

  it('rejects invalid official answers', () => {
    expect(() => scoreGuess(10, 0)).toThrow(RangeError);
    expect(() => scoreGuess(10, Number.NaN)).toThrow(TypeError);
  });
});
