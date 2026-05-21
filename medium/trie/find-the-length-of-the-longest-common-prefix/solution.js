/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  const set = new Set();

  for (const num of arr1) {
    let x = num;

    while (x > 0) {
      set.add(x);
      x = Math.floor(x / 10);
    }
  }

  let ans = 0;

  for (const num of arr2) {
    let x = num;

    while (x > 0) {
      if (set.has(x)) {
        ans = Math.max(ans, x.toString().length);
        break;
      }

      x = Math.floor(x / 10);
    }
  }

  return ans;
};
