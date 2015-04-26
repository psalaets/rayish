# rayish

Line that goes for a while in one direction and then stops.

## Usage

### Create from start point and end point

```js
var Rayish = require('rayish');

var start = {x: 0, y: 0};
var end = {x: 20, y: 15};

var r = new Rayish(start, end);

r.start // (0, 0)
r.end   // (20, 15)
```

### Create from start point, some other point and length

```js
var Rayish = require('rayish');

var start = {x: 0, y: 0};
var otherPointOnRay = {x: 20, y: 15};
var length = 5;

var r = new Rayish(start, otherPointOnRay, length);

r.start // (0, 0)
r.end   // (4, 3)
```

## Install

```bash
npm install rayish
```

## License

MIT