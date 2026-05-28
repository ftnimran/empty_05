/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function (wordsContainer, wordsQuery) {
  class TrieNode {
    constructor() {
      this.children = new Array(26);
      this.idx = -1;
    }
  }

  const root = new TrieNode();

  let best = 0;

  for (let i = 1; i < wordsContainer.length; i++) {
    if (wordsContainer[i].length < wordsContainer[best].length) {
      best = i;
    }
  }

  root.idx = best;

  for (let i = 0; i < wordsContainer.length; i++) {
    const word = wordsContainer[i];

    let node = root;

    if (word.length < wordsContainer[node.idx].length) {
      node.idx = i;
    }

    for (let j = word.length - 1; j >= 0; j--) {
      const k = word.charCodeAt(j) - 97;

      if (!node.children[k]) {
        node.children[k] = new TrieNode();
      }

      node = node.children[k];

      if (node.idx === -1 || word.length < wordsContainer[node.idx].length) {
        node.idx = i;
      }
    }
  }

  const ans = new Array(wordsQuery.length);

  for (let i = 0; i < wordsQuery.length; i++) {
    const word = wordsQuery[i];

    let node = root;

    for (let j = word.length - 1; j >= 0; j--) {
      const k = word.charCodeAt(j) - 97;

      if (!node.children[k]) {
        break;
      }

      node = node.children[k];
    }

    ans[i] = node.idx;
  }

  return ans;
};
