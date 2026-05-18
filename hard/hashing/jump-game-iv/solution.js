/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  const n = arr.length;

  if (n === 1) return 0;

  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }
    map.get(arr[i]).push(i);
  }

  const queue = [0];
  const visited = new Array(n).fill(false);

  visited[0] = true;

  let steps = 0;

  while (queue.length) {
    let size = queue.length;

    while (size--) {
      const i = queue.shift();

      if (i === n - 1) {
        return steps;
      }

      const next = map.get(arr[i]) || [];

      next.push(i - 1);
      next.push(i + 1);

      for (const ni of next) {
        if (ni >= 0 && ni < n && !visited[ni]) {
          visited[ni] = true;
          queue.push(ni);
        }
      }

      map.delete(arr[i]);
    }

    steps++;
  }

  return -1;
};
