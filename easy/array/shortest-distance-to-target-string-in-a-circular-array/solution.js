/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function (words, target, startIndex) {
  let n = words.length;
  let visited = new Set();

  function dfs(i, steps) {
    if (visited.has(i)) return Infinity;
    if (words[i] === target) return steps;

    visited.add(i);

    let left = dfs((i - 1 + n) % n, steps + 1);
    let right = dfs((i + 1) % n, steps + 1);

    return Math.min(left, right);
  }

  let res = dfs(startIndex, 0);
  return res === Infinity ? -1 : res;
};
