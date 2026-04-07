/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function (width, height) {
  this.w = width;
  this.h = height;
  this.x = 0;
  this.y = 0;
  this.d = 0;
  this.c = 2 * (width + height) - 4;
};

/**
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function (num) {
  num %= this.c;

  const move = (steps) => {
    if (steps === 0) return;

    let m;

    if (this.d === 0) {
      m = Math.min(steps, this.w - 1 - this.x);
      this.x += m;
    } else if (this.d === 1) {
      m = Math.min(steps, this.h - 1 - this.y);
      this.y += m;
    } else if (this.d === 2) {
      m = Math.min(steps, this.x);
      this.x -= m;
    } else {
      m = Math.min(steps, this.y);
      this.y -= m;
    }

    if (steps > m) {
      this.d = (this.d + 1) % 4;
      move(steps - m);
    }
  };

  move(num);

  if (num === 0 && this.x === 0 && this.y === 0) {
    this.d = 3;
  }
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function () {
  return [this.x, this.y];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function () {
  return ["East", "North", "West", "South"][this.d];
};

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
