/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const setA = new Set();
  const setB = new Set();

  const ans = [];

  let common = 0;

  for (let i = 0; i < A.length; i++) {
    setA.add(A[i]);

    if (setA.has(B[i])) {
      common++;
    }

    setB.add(B[i]);

    if (A[i] !== B[i] && setB.has(A[i])) {
      common++;
    }

    ans.push(common);
  }

  return ans;
};
