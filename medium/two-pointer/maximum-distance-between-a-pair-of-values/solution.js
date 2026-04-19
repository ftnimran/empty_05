/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let i = 0,
    j = 0;
  let n1 = nums1.length,
    n2 = nums2.length;
  let ans = 0;

  while (i < n1 && j < n2) {
    if (nums1[i] <= nums2[j]) {
      ans = Math.max(ans, j - i);
      j++; // try to expand distance
    } else {
      i++; // reduce nums1[i]
    }
  }

  return ans;
};
