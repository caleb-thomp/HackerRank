function countSwaps(arr: number[], d: Record<number, number>): number {
  let i = 0, swaps = 0;
  while (i < arr.length) {
    const loc = d[arr[i]];
    if (loc === i) {
      i++;
      continue;
    }
    [arr[i], arr[loc]] = [arr[loc], arr[i]];
    swaps++;
  }
  return swaps;
}

function lilysHomework(arr: number[]): number {
  const sortedArr = [...arr].sort((a, b) => a - b);

  const forwardD: Record<number, number> = {};
  for (let i = 0; i < sortedArr.length; i++) {
    forwardD[sortedArr[i]] = i;
  }

  const backwardD: Record<number, number> = {};
  for (let i = sortedArr.length - 1; i >= 0; i--) {
    backwardD[sortedArr[i]] = sortedArr.length - i - 1;
  }

  return Math.min(countSwaps([...arr], forwardD), countSwaps([...arr], backwardD));
}
