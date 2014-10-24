var Vec2 = require('vec2');

function Rayish(start, otherPoint, length) {
  this.start = new Vec2(start);

  this.direction = calcDirection(this.start, new Vec2(otherPoint));

  this.end = new Vec2(this.direction);
  this.end.multiply(length);
  this.end.add(this.start);
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
  getStart: function() {
    return this.start;
  },
  getEnd: function() {
    return this.end;
  },
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
