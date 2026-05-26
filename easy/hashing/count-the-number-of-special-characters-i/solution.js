/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  let lower = 0;
  let upper = 0;

  for (const ch of word) {
    const code = ch.charCodeAt(0);

    if (code >= 97) {
      lower |= 1 << (code - 97);
    } else {
      upper |= 1 << (code - 65);
    }
  }

  let common = lower & upper;

  let count = 0;

  while (common) {
    count++;
    common &= common - 1;
  }

  return count;
};
