/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function (tasks) {
  tasks.sort((a, b) => {
    return b[1] - b[0] - (a[1] - a[0]);
  });

  let answer = 0;

  function solve(i, current) {
    if (i === tasks.length) {
      return;
    }

    let [actual, minimum] = tasks[i];

    if (current < minimum) {
      answer += minimum - current;
      current = minimum;
    }

    solve(i + 1, current - actual);
  }

  solve(0, 0);

  return answer;
};
