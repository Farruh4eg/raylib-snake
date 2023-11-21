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

  isIntersecting(otherRect) {
    return (
      this.posX < otherRect.posX + otherRect.width &&
      this.posX + this.width > otherRect.posX &&
      this.posY < otherRect.posY + otherRect.height &&
      this.posY + this.height > otherRect.posY
    );
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }

  /**
   * Deletes (moves off-screen) this element.
  @param {Number} screenWidth - screen width (in pixels)
  @param {Number} screenHeight - screen height (in pixels)
  @returns {void}
  */
  remove(screenWidth, screenHeight) {
    this.posX -= screenWidth * 5;
    this.posY -= screenHeight * 5;
  }

  static getCenter(rectangleObj) {
    let obj = {};

    obj.posX = (rectangleObj.posX + rectangleObj.width) / 2;
    obj.posY = (rectangleObj.posY + rectangleObj.height) / 2;

    return obj;
  }

  controls() {
    const keyUp = r.KEY_W;
    const keyDown = r.KEY_S;
    const keyLeft = r.KEY_A;
    const keyRight = r.KEY_D;

    if (r.IsKeyDown(keyRight)) {
      this.posX += this.velocity;
    }
    if (r.IsKeyDown(keyLeft)) {
      this.posX -= this.velocity;
    }
    if (r.IsKeyDown(keyUp)) {
      this.posY -= this.velocity;
    }
    if (r.IsKeyDown(keyDown)) {
      this.posY += this.velocity;
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
