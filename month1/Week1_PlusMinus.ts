function plusMinus(arr: number[]): void {
  const n = arr.length;
  const positives = arr.filter((x) => x > 0).length;
  const negatives = arr.filter((x) => x < 0).length;
  const zeros = n - positives - negatives;
  console.log((positives / n).toFixed(6));
  console.log((negatives / n).toFixed(6));
  console.log((zeros / n).toFixed(6));
}