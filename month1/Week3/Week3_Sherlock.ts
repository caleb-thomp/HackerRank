function isValid(s: string): string {
  let strCount: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    strCount[s[i]] ? strCount[s[i]] += 1 : strCount[s[i]] = 1;
  }

  let freArr = Object.keys(strCount).map(key => strCount[key]);
  freArr.sort((a, b) => a - b);
  if (freArr[0] === freArr[freArr.length - 1]) {
    return 'YES';
  } else if (freArr[0] === freArr[freArr.length - 2] && freArr[freArr.length - 1] - freArr[0] === 1) {
    return 'YES';
  } else if (freArr[0] === 1 && freArr[1] === freArr[freArr.length - 1]) {
    return 'YES';
  } else {
    return 'NO';
  }
}