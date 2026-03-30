var canPartitionGrid = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let totalSum = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) totalSum += grid[r][c];
  }

  const check = (isHorizontal) => {
    const R = isHorizontal ? m : n;
    const C = isHorizontal ? n : m;

    const sliceSums = new Array(R).fill(0);
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        sliceSums[i] += isHorizontal ? grid[i][j] : grid[j][i];
      }
    }

    let s1 = 0;
    const map1 = new Map();
    const map2 = new Map();

    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        const val = grid[r][c];
        map2.set(val, (map2.get(val) || 0) + 1);
      }
    }

    for (let i = 0; i < R - 1; i++) {
      for (let j = 0; j < C; j++) {
        const val = isHorizontal ? grid[i][j] : grid[j][i];
        map1.set(val, (map1.get(val) || 0) + 1);
        map2.set(val, map2.get(val) - 1);
        if (map2.get(val) === 0) map2.delete(val);
      }

      s1 += sliceSums[i];
      let s2 = totalSum - s1;

      if (s1 === s2) return true;

      let x = s1 - s2;
      if (x > 0 && map1.has(x)) {
        if (isValid(i + 1, C, x, isHorizontal, 0, i)) return true;
      }

      let y = s2 - s1;
      if (y > 0 && map2.has(y)) {
        if (isValid(R - (i + 1), C, y, isHorizontal, i + 1, R - 1)) return true;
      }
    }
    return false;
  };

  function isValid(sectionSize, crossDim, val, isHorizontal, startIdx, endIdx) {
    if (sectionSize > 1 && crossDim > 1) return true;

    if (isHorizontal) {
      if (crossDim === 1) {
        return grid[startIdx][0] === val || grid[endIdx][0] === val;
      }
      return grid[startIdx][0] === val || grid[startIdx][n - 1] === val;
    } else {
      if (crossDim === 1) {
        return grid[0][startIdx] === val || grid[0][endIdx] === val;
      }
      return grid[0][startIdx] === val || grid[m - 1][startIdx] === val;
    }
  }

  return check(true) || check(false);
};
