"use strict";
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["right"] = 1] = "right";
    direction[direction["left"] = 2] = "left";
    direction[direction["down"] = 22] = "down";
})(direction || (direction = {}));
console.log(direction.up);
console.log(direction.down);
