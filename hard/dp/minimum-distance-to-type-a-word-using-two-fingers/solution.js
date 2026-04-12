/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function (word) {
  const memo = new Map();

  const getPos = (c) => [
    Math.floor((c.charCodeAt(0) - 65) / 6),
    (c.charCodeAt(0) - 65) % 6,
  ];

  const dist = (a, b) => {
    if (a === -1) return 0;
    let [x1, y1] = getPos(a);
    let [x2, y2] = getPos(b);
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  };

  function dfs(i, f1, f2) {
    if (i === word.length) return 0;

    let key = i + "," + f1 + "," + f2;
    if (memo.has(key)) return memo.get(key);

    let cur = word[i];

    let use1 = dist(f1, cur) + dfs(i + 1, cur, f2);
    let use2 = dist(f2, cur) + dfs(i + 1, f1, cur);

    let ans = Math.min(use1, use2);

    memo.set(key, ans);
    return ans;
  }

  return dfs(0, -1, -1);
};
