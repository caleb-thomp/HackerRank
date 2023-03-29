function icecreamParlor(m: number, arr: number[]): number[] {
  const vals: Record<number, number> = {};
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (vals[arr[i]]) {
      return [vals[arr[i]], i + 1]
    }
    vals[m - arr[i]] = i + 1
  }
}
