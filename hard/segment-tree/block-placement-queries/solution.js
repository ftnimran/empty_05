/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
  const MAXX = Math.min(50000, 3 * queries.length);
  const seg = new Array(4 * (MAXX + 1)).fill(0);

  function update(node, l, r, idx, val) {
    if (l === r) {
      seg[node] = val;
      return;
    }
    const mid = (l + r) >> 1;
    if (idx <= mid) update(node * 2, l, mid, idx, val);
    else update(node * 2 + 1, mid + 1, r, idx, val);
    seg[node] = Math.max(seg[node * 2], seg[node * 2 + 1]);
  }

  function query(node, l, r, ql, qr) {
    if (ql > r || qr < l) return 0;
    if (ql <= l && r <= qr) return seg[node];
    const mid = (l + r) >> 1;
    return Math.max(
      query(node * 2, l, mid, ql, qr),
      query(node * 2 + 1, mid + 1, r, ql, qr),
    );
  }

  const obstacles = [0, MAXX + 1];
  const ans = [];

  function findInsertionIndex(val) {
    let lo = 0,
      hi = obstacles.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (obstacles[mid] < val) lo = mid + 1;
      else hi = mid - 1;
    }
    return lo;
  }

  for (const q of queries) {
    if (q[0] === 1) {
      const x = q[1];
      const idx = findInsertionIndex(x);

      const prev = obstacles[idx - 1];
      const next = obstacles[idx];

      obstacles.splice(idx, 0, x);

      update(1, 0, MAXX, x, x - prev);
      if (next <= MAXX) {
        update(1, 0, MAXX, next, next - x);
      }
    } else {
      const x = q[1];
      const sz = q[2];

      let lo = 0,
        hi = obstacles.length - 1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (obstacles[mid] <= x) lo = mid + 1;
        else hi = mid - 1;
      }

      const prevObstacle = obstacles[hi];

      let maxGap = query(1, 0, MAXX, 0, prevObstacle);
      maxGap = Math.max(maxGap, x - prevObstacle);

      ans.push(maxGap >= sz);
    }
  }

  return ans;
};
