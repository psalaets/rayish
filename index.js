var Vec2 = require('vec2');

/**
* Create new Rayish.
*
* With two arguments:
*
* @param {object} start - Object with x/y properties that is start point of ray.
* @param {object} end - Object with x/y properties that is end point of ray.
*
* With three arguments:
*
* @param {object} start - Object with x/y properties that is start point of ray.
* @param {object} otherPoint - Object with x/y properties that is any other
*                              point colinear with ray.
* @param {number} length - Length of ray
*/
function Rayish(start, otherPoint, length) {
  this.start = new Vec2(start);
  this.direction = calcDirection(this.start, new Vec2(otherPoint));

  if (arguments.length == 2) {
    this.end = new Vec2(otherPoint);
    if (this.end.equal(this.start)) {
      this.end.set(this.end.x, this.start.y - 1, false);
    }
  } else if (arguments.length == 3) {
    this.end = new Vec2(this.direction);
    this.end.multiply(length);
    this.end.add(this.start);
  }
}

/**
* @param {Vec2} start
* @param {Vec2} otherPoint
* @return {Vec2} normalized direction vector
*/
function calcDirection(start, otherPoint) {
  if (start.equal(otherPoint)) {
    return new Vec2(0, -1);
  } else {
    var direction = new Vec2(otherPoint);
    direction.subtract(start);
    return direction.normalize();
  }
}

Rayish.prototype = {
  isGoingUp: function() {
    return this.direction.y < 0;
  },
  isGoingDown: function() {
    return this.direction.y > 0;
  },
  isGoingLeft: function() {
    return this.direction.x < 0;
  },
  isGoingRight: function() {
    return this.direction.x > 0;
  }
};

module.exports = Rayish;
