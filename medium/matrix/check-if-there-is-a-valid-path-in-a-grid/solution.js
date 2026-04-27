/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dirs = {
    1: [
      [0, -1],
      [0, 1],
    ],
    2: [
      [-1, 0],
      [1, 0],
    ],
    3: [
      [0, -1],
      [1, 0],
    ],
    4: [
      [0, 1],
      [1, 0],
    ],
    5: [
      [0, -1],
      [-1, 0],
    ],
    6: [
      [0, 1],
      [-1, 0],
    ],
  };

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  function dfs(x, y) {
    if (x === m - 1 && y === n - 1) return true;

    visited[x][y] = true;

    for (const [dx, dy] of dirs[grid[x][y]]) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0 || nx >= m || ny >= n || visited[nx][ny]) continue;

      let valid = false;

      for (const [rdx, rdy] of dirs[grid[nx][ny]]) {
        if (nx + rdx === x && ny + rdy === y) {
          valid = true;
          break;
        }
      }

      if (valid && dfs(nx, ny)) return true;
    }

    return false;
  }

  return dfs(0, 0);
};
