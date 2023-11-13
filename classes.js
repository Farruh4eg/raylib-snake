const { isBetween } = require('./helper');
const r = require('raylib');

class Rectangle {
  constructor(posX, posY, width, height, color) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.isSquare = posX === posY;
  }

  [Symbol.iterator] = function* () {
    yield this.posX;
    yield this.posY;
    yield this.width;
    yield this.height;
    yield this.color;
  };

  getArea() {
    return this.isSquare ? this.width * this.width : this.width * this.height;
  }

  getPerimeter() {
    return this.isSquare ? 4 * this.width : 2 * (width + height);
  }

  getDiagonal() {
    return this.isSquare
      ? Math.SQRT2() * this.width
      : Math.sqrt(this.width * this.width + this.height * this.height);
  }

  isPointInside(posX, posY) {
    if (
      isBetween(this.posX, this.posX + this.width, posX) &&
      isBetween(this.posY, this.posY + this.height, posY)
    ) {
      return true;
    }
    return false;
  }

  controls() {
    const keyUp = r.KEY_W;
    const keyDown = r.KEY_S;
    const keyLeft = r.KEY_A;
    const keyRight = r.KEY_D;

    if (r.IsKeyDown(keyRight)) {
      this.posX++;
    }
    if (r.IsKeyDown(keyLeft)) {
      this.posX--;
    }
    if (r.IsKeyDown(keyUp)) {
      this.posY--;
    }
    if (r.IsKeyDown(keyDown)) {
      this.posY++;
    }
    return this;
  }

  checkBorders(screenWidth, screenHeight) {
    if (this.posX < -this.width) {
      this.posX = screenWidth + this.width;
    }
    if (this.posY < -this.height) {
      this.posY = screenHeight + this.height;
    }
    if (this.posX > screenWidth + this.width) {
      this.posX = -this.width;
    }
    if (this.posY > screenHeight + this.height) {
      this.posY = -this.height;
    }
  }
}

module.exports = {
  r,
  Rectangle,
};
