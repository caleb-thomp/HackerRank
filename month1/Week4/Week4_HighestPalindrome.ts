function highestValuePalindrome(s: string, n: number, k: number): string {
  const mid = Math.floor(n / 2);

  // Base case
  if (n === 1) {
    return k >= 1 ? '9' : s;
  }

  // Convert string to array of integers
  const arr = Array.from(s, Number);

  // Mark if modified
  const marklist = new Array(mid).fill(0);

  // First, change into palindromes, mark if modified
  for (let i = 0; i < mid; i++) {
    const j = n - i - 1;
    if (arr[i] !== arr[j]) {
      marklist[i] = 1;
      arr[i] = arr[j] = Math.max(arr[i], arr[j]);
      k--;
      if (k === 0) {
        break;
      }
    }
  }

  // If not palindromes after change
  if (!arr.every((val, i) => val === arr[n - i - 1])) {
    return "-1";
  }

  // Second, change to max value (from left)
  for (let i = 0; i < mid; i++) {
    if (arr[i] === 9) {
      continue;
    }
    const j = n - i - 1;
    const needchange = marklist[i] ? 1 : 2;
    if (k >= needchange) {
      arr[i] = arr[j] = 9;
      k -= needchange;
    }
    if (k === 0) {
      break;
    }
  }

  // Check middle digit
  if (k > 0 && n % 2 === 1) {
    arr[mid] = 9;
  }

  return arr.join('');
}
