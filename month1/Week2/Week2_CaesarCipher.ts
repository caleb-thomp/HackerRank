
function caesarCipher(s: string, k: number): string {
  let result = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = alphabet.indexOf(char.toLowerCase());
    if (index !== -1) {
      const newIndex = (index + k + alphabet.length) % alphabet.length;
      const newChar = alphabet[newIndex];
      result += char.toUpperCase() === char ? newChar.toUpperCase() : newChar;
    } else {
      result += char;
    }
  }
  return result;

}