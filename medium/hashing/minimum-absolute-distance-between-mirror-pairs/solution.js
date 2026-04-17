/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function (nums) {
  const n = nums.length;

  function getReverse(num) {
    let rev = 0;
    while (num > 0) {
      let rem = num % 10;
      rev = rev * 10 + rem;
      num = Math.floor(num / 10);
    }
    return rev;
  }

  const map = new Map(); // reversed -> index
  let result = Infinity;

  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      result = Math.min(result, i - map.get(nums[i]));
    }

    map.set(getReverse(nums[i]), i);
  }

  return result === Infinity ? -1 : result;
};
