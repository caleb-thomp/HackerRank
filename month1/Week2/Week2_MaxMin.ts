function maxMin(k: number, arr: number[]): number {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let minUnfairness = Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    const unfairness = arr[i + k - 1] - arr[i];
    minUnfairness = Math.min(minUnfairness, unfairness);
  }
  return minUnfairness;
}
