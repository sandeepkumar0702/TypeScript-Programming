"use strict";
var directions;
(function (directions) {
    directions["up"] = "hlo";
    directions["right"] = "my";
    directions["left"] = "name";
    directions[directions["down"] = 22] = "down";
})(directions || (directions = {}));
console.log(directions.up);
console.log(directions.down);
