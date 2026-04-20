/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let n = colors.length;
  let memo = new Map();

  function dfs(i, j) {
    if (i >= j) return 0;

    let key = i + "," + j;
    if (memo.has(key)) return memo.get(key);

    let res;
    if (colors[i] !== colors[j]) {
      res = j - i;
    } else {
      res = Math.max(dfs(i + 1, j), dfs(i, j - 1));
    }

    memo.set(key, res);
    return res;
  }

  return dfs(0, n - 1);
};
