function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  const rankedCopy: number[] = [...new Set(ranked)];
  const result: number[] = [];
  let j: number = 0;
  for (let i: number = player.length - 1; i >= 0; i--) {
    while (j < rankedCopy.length && player[i] < rankedCopy[j]) {
      j++;
    }
    result.unshift(j + 1);
  }
  return result;
}
