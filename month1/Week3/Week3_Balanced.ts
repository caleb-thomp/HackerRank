function isBalanced(s: string): string {
  const openBrackets = new Set(['(', '{', '['])
  const map: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (openBrackets.has(s.charAt(i))) {
      stack.push(s.charAt(i))
    } else {
      const value = stack.pop()
      if (map[s.charAt(i)] !== value) {
        return 'NO'
      }
    }
  }
  return !stack.length ? 'YES' : 'NO'
}