function maxSubarray(arr: number[]): [number, number] {
  const maxSumSubsequence = arr.filter(x => x > 0).reduce((a, b) => a + b, 0) || Math.max(...arr);
  let bestSum = 0, currentSum = 0;
  for (const x of arr) {
    currentSum = Math.max(0, currentSum + x);
    bestSum = Math.max(bestSum, currentSum);
  }
  return [bestSum || Math.max(...arr), maxSumSubsequence];
}
