function diagonalDifference(arr: number[][]): number {
  const n = arr.length;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  return Math.abs(sum1 - sum2);
}
