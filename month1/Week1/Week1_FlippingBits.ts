function flippingBits(n: number): number {
  const mask = BigInt(2) ** BigInt(32) - BigInt(1);
  const num = BigInt(n);
  const flipped = mask ^ num;
  return Number(flipped);
}