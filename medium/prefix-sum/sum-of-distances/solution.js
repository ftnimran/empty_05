/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const n = nums.length;

  function helper(i, j, val) {
    if (j === n) return 0;

    let res = 0;
    if (i !== j && nums[j] === val) {
      res += Math.abs(i - j);
    }

    return res + helper(i, j + 1, val);
  }

  const res = [];

  for (let i = 0; i < n; i++) {
    res.push(helper(i, 0, nums[i]));
  }

  return res;
};
