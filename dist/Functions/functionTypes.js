"use strict";
//basic type
function greetin(name) {
    return `Hello , ${name}`;
}
console.log(greetin("Sandeep"));
//arrow functions
const greet1 = (a, b) => a + b;
console.log();
const precessNumber = function (a, b, callback) {
    return callback(a, b);
};
let Sum = precessNumber(10, 9, (a1, b1) => a1 + b1);
let Product = precessNumber(10, 9, (a1, b1) => a1 + b1);
console.log(Sum);
console.log(Product);
