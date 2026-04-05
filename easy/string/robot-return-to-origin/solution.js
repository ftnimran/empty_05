/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
    const c = moves[i];
    if (c === "U") y++;
    else if (c === "D") y--;
    else if (c === "R") x++;
    else x--;
  }

  return x === 0 && y === 0;
};
