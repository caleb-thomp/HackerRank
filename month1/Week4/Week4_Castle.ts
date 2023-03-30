function minimumMoves(grid: string[], startX: number, startY: number, goalX: number, goalY: number): number {
  //if start === goal
  if (startX === goalX && startY === goalY) return 0;

  //initializing variables
  const rows = grid.length;
  const cols = grid[0].length;
  const goal = `${goalX}-${goalY}`;
  let level = 1;
  let levelNodes = new Set<string>();
  let nextLevelNodes = new Set<string>();
  let visited = new Set<string>();

  //initializing iterations
  levelNodes.add(`${startX}-${startY}`);
  visited.add(`${startX}-${startY}`);
  updateNext(`${startX}-${startY}`);

  let iterator: IterableIterator<[string, string]>;

  while (nextLevelNodes.size > 0) {
    levelNodes = nextLevelNodes;
    nextLevelNodes = new Set<string>();
    iterator = levelNodes.entries();
    for (const entry of iterator) {
      if (entry[0] === goal) {
        return level;
      } else {
        visited.add(entry[0]);
        updateNext(entry[0]);
      }
    }
    level++;
  }
  return -1;

  //subfunction to find the next elements to be checked
  function updateNext(str: string) {
    //defining increments to right, left, top and down directions 
    const increments = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];

    let [dx, dy, x, y] = [0, 0, 0, 0];

    for (let i = 0; i < 4; i++) {
      dx = increments[i][0];
      dy = increments[i][1];
      x = Number(str.split('-')[0]) + dx;
      y = Number(str.split('-')[1]) + dy;

      while (y < cols && x < rows && y > -1 && x > -1) {
        if (grid[x][y] === 'X') break;

        if (!visited.has(`${x}-${y}`)) {
          nextLevelNodes.add(`${x}-${y}`);
        }
        x += dx;
        y += dy;
      }
    }
  }
}
