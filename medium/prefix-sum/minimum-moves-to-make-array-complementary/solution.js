/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function (nums, limit) {
  const n = nums.length;
  const delta = new Array((limit << 1) + 2).fill(0);

  for (let i = 0; i < n >> 1; i++) {
    let mn = nums[i];
    let mx = nums[n - 1 - i];

    if (mn > mx) {
      [mn, mx] = [mx, mn];
    }

    delta[2] += 2;
    delta[mn + 1]--;
    delta[mn + mx]--;
    delta[mn + mx + 1]++;
    delta[mx + limit + 1]++;
  }

  let res = n;
  let moves = 0;

  for (let targ = 2; targ <= limit * 2; targ++) {
    moves += delta[targ];
    res = Math.min(res, moves);
  }

  return res;
};
