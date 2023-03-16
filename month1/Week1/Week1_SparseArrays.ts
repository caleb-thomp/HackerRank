function matchingStrings(strings: string[], queries: string[]): number[] {
  const results: number[] = [];

  for (const query of queries) {
    let count = 0;

    for (const string of strings) {
      if (query === string) {
        count++;
      }
    }

    results.push(count);
  }

  return results;
}