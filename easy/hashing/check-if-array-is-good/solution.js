/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  const n = nums.length - 1;
  const freq = new Array(n + 1).fill(0);

  for (const x of nums) {
    if (x < 1 || x > n) return false;
    freq[x]++;
  }

  function check(i) {
    if (i === n) return freq[n] === 2;

    if (freq[i] !== 1) return false;

    return check(i + 1);
  }

  return check(1);
};
