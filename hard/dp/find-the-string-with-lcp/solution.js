/**
 * @param {number[][]} lcp
 * @return {string}
 */
var findTheString = function (lcp) {
  const n = lcp.length;
  const res = new Array(n).fill(0);
  let charCode = 1;

  for (let i = 0; i < n; i++) {
    if (res[i] > 0) continue;
    if (charCode > 26) return "";

    for (let j = i; j < n; j++) {
      if (lcp[i][j] > 0) {
        res[j] = charCode;
      }
    }
    charCode++;
  }

  const word = res.map((c) => String.fromCharCode(96 + c)).join("");

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let expectedLcp = 0;
      if (word[i] === word[j]) {
        expectedLcp = i < n - 1 && j < n - 1 ? lcp[i + 1][j + 1] + 1 : 1;
      }

      if (lcp[i][j] !== expectedLcp) {
        return "";
      }
    }
  }

  return word;
};
