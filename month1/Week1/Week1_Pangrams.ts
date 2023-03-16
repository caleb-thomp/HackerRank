function isPangram(s: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (const char of alphabet) {
    if (!s.toLowerCase().includes(char)) {
      return 'not pangram';
    }
  }
  return 'pangram';
}
