/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count++;
    }

    if (count > 1) {
      return false;
    }
  }

  return true;
};
