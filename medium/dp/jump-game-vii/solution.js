/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function (s, minJump, maxJump) {
  const n = s.length;

  const queue = [0];

  let farthest = 0;

  while (queue.length) {
    const i = queue.shift();

    const start = Math.max(i + minJump, farthest + 1);

    const end = Math.min(i + maxJump, n - 1);

    for (let j = start; j <= end; j++) {
      if (s[j] === "0") {
        if (j === n - 1) {
          return true;
        }

        queue.push(j);
      }
    }

    farthest = end;
  }

  return n === 1;
};
