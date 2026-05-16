/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  function solve(l, r) {
    if (l === r) return nums[l];

    const mid = (l + r) >> 1;

    if (nums[mid] > nums[r]) {
      return solve(mid + 1, r);
    }

    if (nums[mid] < nums[r]) {
      return solve(l, mid);
    }

    return solve(l, r - 1);
  }

  return solve(0, nums.length - 1);
};
