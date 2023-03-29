function minimumBribes(q: number[]): void {
  let bribes: number = 0;
  for (let i: number = q.length - 1; i >= 0; i--) {
    const target: number = i + 1;
    let currBribe: number = 0, targetIdx: number = i;
    while (q[targetIdx] !== target) {
      if (++currBribe > 2) {
        console.log('Too chaotic');
        return;
      }
      targetIdx--;
    }
    bribes += currBribe;
    q.splice(targetIdx, 1);
  }
  console.log(bribes);
}
