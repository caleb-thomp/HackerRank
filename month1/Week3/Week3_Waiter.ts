function waiter(number: number[], q: number): number[] {
  const primes: number[] = [];
  const divisors: number[] = [2, 3, 5, 7];
  let i = 2;
  while (primes.length < q) {
    if (divisors.indexOf(i) !== -1) primes.push(i);
    else {
      if (divisors.every((divisor) => i % divisor !== 0)) {
        primes.push(i);
        divisors.push(i);
      }
    }
    i++;
  }
  const answers: number[] = [];
  let A = number;
  for (let i = 0; i < q; i++) {
    let Ai: number[] = [];
    let Bi: number[] = [];
    for (let j = A.length - 1; j >= 0; j--) {
      if (A[j] % primes[i] === 0) {
        Bi.push(A[j]);
      } else {
        Ai.push(A[j]);
      }
    }
    while (Bi.length > 0) {
      answers.push(Bi.pop()!);
    }
    A = Ai;
  }
  while (A.length > 0) {
    answers.push(A.pop()!);
  }
  return answers;
}
