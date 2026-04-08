/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function (nums, queries) {
  const MOD = 1000000007;

  function apply(qi) {
    if (qi === queries.length) return;

    let [l, r, k, v] = queries[qi];

    function update(i) {
      if (i > r) return;
      nums[i] = (nums[i] * v) % MOD;
      update(i + k);
    }

    update(l);
    apply(qi + 1);
  }

  apply(0);

  let xor = 0;
  for (let num of nums) xor ^= num;

  return xor;
};
