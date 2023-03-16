function countOccurrences(arr: number[]): number[] {
  const map = new Map<number, number>();
  for (const num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num)! + 1);
    } else {
      map.set(num, 1);
    }
  }
  const frequencies: number[] = Array(100).fill(0);
  for (const [num, count] of map) {
    frequencies[num] = count;
  }
  return frequencies;
}
