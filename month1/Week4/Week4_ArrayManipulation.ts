function arrayManipulation(n: number, queries: number[][]): number {
  const deltas: number[] = new Array(n + 2).fill(0);
  for (const [a, b, k] of queries) {
    deltas[a] += k;
    deltas[b + 1] -= k;
  }

  let maxVal = 0;
  let val = 0;
  for (const delta of deltas) {
    val += delta;
    maxVal = Math.max(maxVal, val);
  }

  return maxVal;
}