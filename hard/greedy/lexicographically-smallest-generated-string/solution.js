/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var generateString = function (str1, str2) {
  const n = str1.length;
  const m = str2.length;
  const len = n + m - 1;
  const word = new Array(len).fill(null);
  const fixed = new Array(len).fill(false);

  for (let i = 0; i < n; i++) {
    if (str1[i] === "T") {
      for (let j = 0; j < m; j++) {
        if (word[i + j] !== null && word[i + j] !== str2[j]) {
          return "";
        }
        word[i + j] = str2[j];
        fixed[i + j] = true;
      }
    }
  }

  for (let i = 0; i < len; i++) {
    if (word[i] === null) {
      word[i] = "a";
    }
  }

  for (let i = 0; i < n; i++) {
    if (str1[i] === "F") {
      let match = true;
      for (let j = 0; j < m; j++) {
        if (word[i + j] !== str2[j]) {
          match = false;
          break;
        }
      }

      if (match) {
        let changed = false;
        for (let j = m - 1; j >= 0; j--) {
          if (!fixed[i + j]) {
            for (let c = 1; c < 26; c++) {
              let char = String.fromCharCode(97 + c);
              if (char !== str2[j]) {
                word[i + j] = char;
                changed = true;
                break;
              }
            }
          }
          if (changed) break;
        }
        if (!changed) return "";
      }
    }
  }

  return word.join("");
};
