/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
  asteroids.sort((a, b) => a - b);

  function dfs(i, cur) {
    if (i === asteroids.length) {
      return true;
    }

    const asteroid = BigInt(asteroids[i]);

    if (cur < asteroid) {
      return false;
    }

    return dfs(i + 1, cur + asteroid);
  }

  return dfs(0, BigInt(mass));
};
