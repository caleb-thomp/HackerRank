function solve(arr: number[], queries: number[]): number[] {
  const result: number[] = [];

  for (const d of queries) {
    let min_among_max = Infinity;
    let max_val = -Infinity;

    for (let i = 0; i < d; i++) {
      max_val = Math.max(max_val, arr[i]);
    }

    min_among_max = max_val;

    for (let i = d; i < arr.length; i++) {
      max_val = Math.max(max_val, arr[i]);
      const popped = arr[i - d];
      if (popped === max_val) {
        max_val = Math.max(...arr.slice(i - d + 1, i + 1));
      }
      min_among_max = Math.min(min_among_max, max_val);
    }

    result.push(min_among_max);
  }

  return result;
}

