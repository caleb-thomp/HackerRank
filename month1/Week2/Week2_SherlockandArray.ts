function balancedSums(arr: number[]): string {
  const totalSum = arr.reduce((acc, val) => acc + val, 0);
  let leftSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (leftSum === totalSum - leftSum - arr[i]) {
      return "YES";
    }
    leftSum += arr[i];
  }
  
  return "NO";
}
