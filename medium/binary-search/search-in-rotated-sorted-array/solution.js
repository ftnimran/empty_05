/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length;

  // find pivot
  let l = 0;
  let r = n - 1;

  while (l < r) {
    const mid = (l + r) >> 1;

    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  const pivot = l;

  // normal binary search with mapping
  l = 0;
  r = n - 1;

  while (l <= r) {
    const mid = (l + r) >> 1;

    const realMid = (mid + pivot) % n;

    if (nums[realMid] === target) {
      return realMid;
    }

    if (nums[realMid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};
