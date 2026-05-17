/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const N = 5e4;

let q = new Array(N);
let front = 0,
  back = 0;

let vis = new Array(N).fill(false);

var canReach = function (arr, start) {
  const n = arr.length;

  front = 0;
  back = 0;

  q[back++] = start;
  vis[start] = true;

  while (front < back) {
    const i = q[front++];
    const x = arr[i];

    const l = i - x;
    const r = i + x;

    if (x === 0) {
      vis.fill(false, 0, n);
      return true;
    }

    if (l >= 0 && !vis[l]) {
      q[back++] = l;
      vis[l] = true;
    }

    if (r < n && !vis[r]) {
      q[back++] = r;
      vis[r] = true;
    }
  }

  vis.fill(false, 0, n);

  return false;
};
