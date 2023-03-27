function superDigit(n: string, k: number): number {
  const sum = n.split("").reduce((acc, digit) => acc + parseInt(digit), 0) * k;
  
  if (sum < 10) {
    return sum;
  } else {
    return superDigit(sum.toString(), 1);
  }
}
