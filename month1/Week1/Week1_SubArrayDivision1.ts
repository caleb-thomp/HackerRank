function birthday(s: number[], d: number, m: number): number {
  let count = 0;
  for (let i = 0; i < s.length - m + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}
