function dynamicArray(n: number, queries: number[][]): number[] {
  const seqList: number[][] = new Array(n).fill(null).map(() => []);
  let lastAnswer = 0;
  const result: number[] = [];

  for (let i = 0; i < queries.length; i++) {
    const [queryType, x, y] = queries[i];
    const index = (x ^ lastAnswer) % n;

    if (queryType === 1) {
      seqList[index].push(y);
    } else {
      const seq = seqList[index];
      lastAnswer = seq[y % seq.length];
      result.push(lastAnswer);
    }
  }

  return result;
}