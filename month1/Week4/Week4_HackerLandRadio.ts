function hackerlandRadioTransmitters(x: number[], k: number): number {
  x.sort((a, b) => a - b);
  let count = 0;
  let i = 0;
  while (i < x.length) {
    let s = x[i];
    i++;
    while (i < x.length && x[i] <= s + k) {
      i++;
    }
    let loc = x[i - 1];
    while (i < x.length && x[i] <= loc + k) {
      i++;
    }
    count++;
  }
  return count;
}
