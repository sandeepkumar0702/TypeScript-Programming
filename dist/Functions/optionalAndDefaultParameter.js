"use strict";
function greets(num1, name) {
    return `hlo from ${name} with age of ${num1}`;
}
let result1 = greets(21, "sam");
console.log(result1);
function greets2(num1, name = "sandeep") {
    return `hlo from ${name} with age of ${num1}`;
}
let result2 = greets2(22);
console.log(result2);
