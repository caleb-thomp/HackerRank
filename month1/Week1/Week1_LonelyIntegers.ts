function findUniqueElement(a: number[]): number {
  let uniqueElement = 0;

  for (const element of a) {
    uniqueElement ^= element;
  }

  return uniqueElement;
}
