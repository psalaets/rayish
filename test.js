var assert = require('chai').assert;
var Rayish = require('./');

// precision param when comparing non-integers
var ALLOWED_DELTA = 0.00001;

describe('Rayish', function() {
  describe('constructor with 2 args', function() {
    it('sets start point', function() {
      var start = {x: 0, y: 1};
      var end = {x: 3, y: 4};
      var r = new Rayish(start, end);

      assert.equal(r.start.x, 0);
      assert.equal(r.start.y, 1);
    });

    it('sets direction', function() {
      var start = {x: 0, y: 1};
      var end = {x: 3, y: 4};
      var r = new Rayish(start, end);

      assert.closeTo(r.direction.x, Math.sqrt(2) / 2, ALLOWED_DELTA);
      assert.closeTo(r.direction.y, Math.sqrt(2) / 2, ALLOWED_DELTA);
    });

    it('sets end point', function() {
      var start = {x: 0, y: 1};
      var end = {x: 3, y: 4};
      var r = new Rayish(start, end);

      assert.equal(r.end.x, 3, ALLOWED_DELTA);
      assert.equal(r.end.y, 4, ALLOWED_DELTA);
    });

    describe('start point and end point are the same', function() {
      it('puts end point one unit above start point', function() {
        var start = {x: 0, y: 0};
        var end = {x: 0, y: 0};
        var r = new Rayish(start, end);

        assert.equal(r.end.x, 0);
        assert.equal(r.end.y, -1);
      });
    });
  });

  describe('constructor with 3 args', function() {
    it('sets start point', function() {
      var start = {x: 1, y: 2};
      var other = {x: 3, y: 4};
      var r = new Rayish(start, other, 5);

      assert.equal(r.start.x, 1);
      assert.equal(r.start.y, 2);
    });

    it('sets direction', function() {
      var start = {x: 0, y: 1};
      var other = {x: 3, y: 4};
      var r = new Rayish(start, other, 5);

      assert.closeTo(r.direction.x, Math.sqrt(2) / 2, ALLOWED_DELTA);
      assert.closeTo(r.direction.y, Math.sqrt(2) / 2, ALLOWED_DELTA);
    });

    it('sets end point', function() {
      var start = {x: 0, y: 1};
      var other = {x: 3, y: 4};
      var r = new Rayish(start, other, 5);

      assert.closeTo(r.end.x, 5 * (Math.sqrt(2) / 2), ALLOWED_DELTA);
      assert.closeTo(r.end.y, 1 + (5 * (Math.sqrt(2) / 2)), ALLOWED_DELTA);
    });

    describe('start point and other point are the same', function() {
      it('puts end point above start point', function() {
        var start = {x: 0, y: 0};
        var other = {x: 0, y: 0};
        var r = new Rayish(start, other, 5);

        assert.equal(r.end.x, 0);
        assert.equal(r.end.y, -5);
      });
    });
  });

  it('knows where it points (y increases downwards)', function() {
    var pointsUpLeft = new Rayish({x: 0, y: 0}, {x: -1, y: -1}, 5);

    assert.ok(pointsUpLeft.isGoingUp());
    assert.ok(pointsUpLeft.isGoingLeft());
    assert.notOk(pointsUpLeft.isGoingDown());
    assert.notOk(pointsUpLeft.isGoingRight());

    var pointsDownRight = new Rayish({x: 0, y: 0}, {x: 1, y: 1}, 5);

    assert.ok(pointsDownRight.isGoingDown());
    assert.ok(pointsDownRight.isGoingRight());
    assert.notOk(pointsDownRight.isGoingUp());
    assert.notOk(pointsDownRight.isGoingLeft());
  });
});
