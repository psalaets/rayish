# rayish

Line that goes for a while in one direction and then stops.

## Usage

    var Rayish = require('rayish');
    
    var start = {x: 0, y: 0};
    var otherPointOnRay = {x: 20, y: 15};
    var length = 5;
    
    var r = new Rayish(start, otherPointOnRay, length);
    
    r.start // (0, 0)
    r.end   // (4, 3)

## Install

    npm install rayish

## License

MIT