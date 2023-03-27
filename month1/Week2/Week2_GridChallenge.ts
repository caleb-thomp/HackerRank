function gridChallenge(grid: string[]): string {
  // Sort each row in ascending order
  const sortedRows = grid.map((row) => row.split("").sort().join(""));

  // Check if each column is sorted in ascending order
  for (let col = 0; col < sortedRows[0].length; col++) {
    for (let row = 1; row < sortedRows.length; row++) {
      if (sortedRows[row][col] < sortedRows[row - 1][col]) {
        return "NO";
      }
    }
  }

  return "YES";
}