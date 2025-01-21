"use strict";
function area(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.side ** 2;
    }
}
const circle1 = { kind: "circle", radius: 12 };
const square1 = { kind: "square", side: 12 };
console.log(area(circle1));
console.log(area(square1));
