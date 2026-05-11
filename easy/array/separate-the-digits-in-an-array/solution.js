/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const ans = [];

  function addDigits(str, idx) {
    if (idx === str.length) return;

    ans.push(str.charCodeAt(idx) - 48);

    addDigits(str, idx + 1);
  }

  function solve(i) {
    if (i === nums.length) return;

    addDigits(nums[i].toString(), 0);

    solve(i + 1);
  }

  solve(0);

  return ans;
};
