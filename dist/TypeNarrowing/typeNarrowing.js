"use strict";
function printLength(value) {
    if (typeof value === 'string') {
        console.log(value.length);
    }
    else {
        console.log(value.toString().length);
    }
}
printLength('Hello');
printLength(123);
