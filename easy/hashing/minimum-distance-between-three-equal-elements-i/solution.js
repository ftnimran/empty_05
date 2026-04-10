/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
  const map = {};
  let ans = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];

    if (!map[val]) map[val] = [];
    map[val].push(i);

    let arr = map[val];

    if (arr.length >= 3) {
      let len = arr.length;
      let dist = 2 * (arr[len - 1] - arr[len - 3]);
      if (dist < ans) ans = dist;
    }
  }

  return ans === Infinity ? -1 : ans;
};
