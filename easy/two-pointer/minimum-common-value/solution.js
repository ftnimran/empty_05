/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
      const mid = (l + r) >> 1;

      if (arr[mid] === target) {
        return true;
      }

      if (arr[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return false;
  }

  for (const x of nums1) {
    if (binarySearch(nums2, x)) {
      return x;
    }
  }

  return -1;
};
