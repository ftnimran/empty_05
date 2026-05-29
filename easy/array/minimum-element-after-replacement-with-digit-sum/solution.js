/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  let ans = Infinity;

  for (let x of nums) {
    let sum = 0;

    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }

    ans = Math.min(ans, sum);
  }

  return ans;
};
