/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
  const n = s1.length;
  const evenCount = new Array(26).fill(0);
  const oddCount = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    const charCode1 = s1.charCodeAt(i) - 97;
    const charCode2 = s2.charCodeAt(i) - 97;

    if (i % 2 === 0) {
      evenCount[charCode1]++;
      evenCount[charCode2]--;
    } else {
      oddCount[charCode1]++;
      oddCount[charCode2]--;
    }
  }

  return (
    evenCount.every((count) => count === 0) &&
    oddCount.every((count) => count === 0)
  );
};
