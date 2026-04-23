/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  const n = nums.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (!map.has(nums[i])) map.set(nums[i], []);
    map.get(nums[i]).push(i);
  }

  const res = new Array(n).fill(0);

  for (let [val, indices] of map) {
    const m = indices.length;

    let prefix = new Array(m).fill(0);
    prefix[0] = indices[0];

    for (let i = 1; i < m; i++) {
      prefix[i] = prefix[i - 1] + indices[i];
    }

    for (let i = 0; i < m; i++) {
      let idx = indices[i];

      let leftSum = i > 0 ? prefix[i - 1] : 0;
      let leftCount = i;
      let leftDist = idx * leftCount - leftSum;

      let rightSum = prefix[m - 1] - prefix[i];
      let rightCount = m - i - 1;
      let rightDist = rightSum - idx * rightCount;

      res[idx] = leftDist + rightDist;
    }
  }

  return res;
};
