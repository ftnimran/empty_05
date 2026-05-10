/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
  const n = nums.length;

  const memo = Array(n).fill(undefined);

  function dfs(i) {
    if (i === n - 1) {
      return 0;
    }

    if (memo[i] !== undefined) {
      return memo[i];
    }

    let ans = -Infinity;

    for (let j = i + 1; j < n; j++) {
      const diff = nums[j] - nums[i];

      if (diff >= -target && diff <= target) {
        const next = dfs(j);

        if (next !== -Infinity) {
          ans = Math.max(ans, next + 1);
        }
      }
    }

    memo[i] = ans;
    return ans;
  }

  const res = dfs(0);

  return res < 0 ? -1 : res;
};
