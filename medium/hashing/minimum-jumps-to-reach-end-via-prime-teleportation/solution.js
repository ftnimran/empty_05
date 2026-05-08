/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function (nums) {
  const n = nums.length;
  if (n === 1) return 0;

  const maxVal = Math.max(...nums);

  const isPrime = new Uint8Array(maxVal + 1).fill(1);
  isPrime[0] = isPrime[1] = 0;

  for (let p = 2; p * p <= maxVal; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= maxVal; i += p) {
        isPrime[i] = 0;
      }
    }
  }

  const presentPrimes = new Set();

  for (let x of nums) {
    if (isPrime[x]) {
      presentPrimes.add(x);
    }
  }

  const primeToIndices = new Map();

  for (let i = 0; i < n; i++) {
    let x = nums[i];
    let temp = x;

    for (let d = 2; d * d <= temp; d++) {
      if (temp % d === 0) {
        if (presentPrimes.has(d)) {
          if (!primeToIndices.has(d)) {
            primeToIndices.set(d, []);
          }

          primeToIndices.get(d).push(i);
        }

        while (temp % d === 0) {
          temp /= d;
        }
      }
    }

    if (temp > 1 && presentPrimes.has(temp)) {
      if (!primeToIndices.has(temp)) {
        primeToIndices.set(temp, []);
      }

      primeToIndices.get(temp).push(i);
    }
  }

  let queue = [0];

  const visited = new Uint8Array(n);
  const usedPrimes = new Set();

  visited[0] = 1;

  let steps = 0;

  while (queue.length > 0) {
    const nextQueue = [];

    for (const i of queue) {
      if (i === n - 1) {
        return steps;
      }

      if (i + 1 < n && !visited[i + 1]) {
        visited[i + 1] = 1;
        nextQueue.push(i + 1);
      }

      if (i - 1 >= 0 && !visited[i - 1]) {
        visited[i - 1] = 1;
        nextQueue.push(i - 1);
      }

      const val = nums[i];

      if (isPrime[val] && !usedPrimes.has(val)) {
        usedPrimes.add(val);

        const targets = primeToIndices.get(val) || [];

        for (const targetIdx of targets) {
          if (!visited[targetIdx]) {
            visited[targetIdx] = 1;
            nextQueue.push(targetIdx);
          }
        }
      }
    }

    queue = nextQueue;
    steps++;
  }

  return -1;
};
