function roadsAndLibraries(n: number, c_lib: number, c_road: number, cities: number[][]): number {
  if (c_lib < c_road) {
    return c_lib * n;
  }

  const adj: number[][] = Array.from({ length: n }, () => []);
  const visited: boolean[] = Array.from({ length: n }, () => false);

  for (const [i, j] of cities) {
    adj[i - 1].push(j);
    adj[j - 1].push(i);
  }

  let graph = 0;
  for (let city = 0; city < n; city++) {
    if (visited[city] === false) {
      visited[city] = true;
      const q: number[] = [city];
      while (q.length > 0) {
        const c = q.shift()!;
        for (const neighbor of adj[c]) {
          if (visited[neighbor - 1] === false) {
            visited[neighbor - 1] = true;
            q.push(neighbor - 1);
          }
        }
      }
      graph += 1;
    }
  }

  return c_lib * graph + (n - graph) * c_road;
}
