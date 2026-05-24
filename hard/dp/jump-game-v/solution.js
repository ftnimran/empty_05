/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function (arr, d) {
  const memo = new Array(arr.length).fill(-1);

  function solve(i) {
    if (memo[i] !== -1) {
      return memo[i];
    }

    let best = 1;

    for (let j = i - 1; j >= Math.max(0, i - d); j--) {
      if (arr[j] >= arr[i]) break;

      best = Math.max(best, 1 + solve(j));
    }

    for (let j = i + 1; j <= Math.min(arr.length - 1, i + d); j++) {
      if (arr[j] >= arr[i]) break;

      best = Math.max(best, 1 + solve(j));
    }

    return (memo[i] = best);
  }

  let ans = 1;

  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(ans, solve(i));
  }

  return ans;
};
