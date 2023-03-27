function sockMerchant(n: number, ar: number[]): number {
  const colorCounts: Map<number, number> = new Map();
  let pairs = 0;

  for (const color of ar) {
    const count = colorCounts.get(color) || 0;
    if (count === 1) {
      pairs++;
      colorCounts.set(color, 0);
    } else {
      colorCounts.set(color, count + 1);
    }
  }

  return pairs;
}
