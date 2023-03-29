function bomberMan(n: number, grid: string[]): string[] {

  let setChar = (i: number, j: number, c: string) => grid[i] = grid[i].slice(0, j) + c + grid[i].slice(j + 1)

  let setOff = (i: number, j: number) => {
    let x = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]
    setChar(i, j, '_')
    for (let [_i, _j] of x)
      grid[_i] && grid[_i][_j] && (grid[_i][_j] !== 'O') && setChar(_i, _j, '_')
  }

  let detonate = (r: number | string) => {
    if (r === 'X') return grid.map(s => 'O'.repeat(s.length))
    r = +r;
    while (r--) {
      for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++)
          if (grid[i][j] === 'O') setOff(i, j)
          else if (grid[i][j] !== '_') setChar(i, j, 'X')
      grid = grid.map(s => s.replace(/X/g, 'O').replace(/_/g, '.'))
    }
    return grid
  }

  let state = n < 2 ? 0 : n === 3 ? 1 : !(n % 2) ? 'X' : (((n - 1) / 2) % 2 === 0) ? 2 : 3
  return detonate(state)
}