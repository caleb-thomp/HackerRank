function miniMaxSum(arr: number[]): void {
  // Write your code here
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Calculate the sum of the smallest four numbers
  const minSum: number = arr
    .slice(0, 4)
    .reduce((a, b) => a + b);

  // Calculate the sum of the largest four numbers
  const maxSum: number = arr
    .slice(1)
    .reduce((a, b) => a + b);

  // Print the result
  console.log(`${minSum} ${maxSum}`);
}
