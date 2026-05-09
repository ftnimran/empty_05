/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  function process(layer) {
    if (layer >= Math.min(m, n) / 2) {
      return;
    }

    const arr = [];

    const top = layer;
    const left = layer;
    const bottom = m - layer - 1;
    const right = n - layer - 1;

    for (let j = left; j <= right; j++) {
      arr.push(grid[top][j]);
    }

    for (let i = top + 1; i <= bottom - 1; i++) {
      arr.push(grid[i][right]);
    }

    for (let j = right; j >= left; j--) {
      arr.push(grid[bottom][j]);
    }

    for (let i = bottom - 1; i >= top + 1; i--) {
      arr.push(grid[i][left]);
    }

    const len = arr.length;
    const rot = k % len;

    let idx = rot;

    for (let j = left; j <= right; j++) {
      grid[top][j] = arr[idx];
      idx = (idx + 1) % len;
    }

    for (let i = top + 1; i <= bottom - 1; i++) {
      grid[i][right] = arr[idx];
      idx = (idx + 1) % len;
    }

    for (let j = right; j >= left; j--) {
      grid[bottom][j] = arr[idx];
      idx = (idx + 1) % len;
    }

    for (let i = bottom - 1; i >= top + 1; i--) {
      grid[i][left] = arr[idx];
      idx = (idx + 1) % len;
    }

    process(layer + 1);
  }

  process(0);

  return grid;
};
