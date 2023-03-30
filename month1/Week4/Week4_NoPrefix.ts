function noPrefix(words: string[]): void {
  const partial: Set<string> = new Set();
  const full: Set<string> = new Set();

  for (const w of words) {
    if (partial.has(w)) {
      console.log(`BAD SET\n${w}`);
      return;
    }
    for (let i = 1; i <= w.length; i++) {
      if (full.has(w.slice(0, i))) {
        console.log(`BAD SET\n${w}`);
        return;
      }
      partial.add(w.slice(0, i));
    }
    full.add(w);
  }

  console.log("GOOD SET");
}
