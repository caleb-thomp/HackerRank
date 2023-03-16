function canPermuteToSatisfyCondition(A: number[], B: number[], k: number): string {
  const n = A.length;
  const sumArray = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    sumArray[i] = A[i] + B[i];
  }
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (A[i] + B[n - i - 1] < k) {
      return 'NO';
    }
  }
  return 'YES';
}
