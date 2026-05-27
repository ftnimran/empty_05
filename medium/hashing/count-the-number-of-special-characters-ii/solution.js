/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const A = [new Array(27).fill(0), new Array(27).fill(0)];

  for (const ch of word) {
    const code = ch.charCodeAt(0);

    const i = code & 31;

    const Case = (code >> 5) & 1;

    A[Case][i] = !(Case & A[0][i]) ? 1 : 0;
  }

  let count = 0;

  for (let i = 1; i <= 26; i++) {
    if (A[0][i] && A[1][i]) {
      count++;
    }
  }

  return count;
};
