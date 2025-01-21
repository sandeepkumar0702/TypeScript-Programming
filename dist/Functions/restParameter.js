"use strict";
function sumOfNumbers(...number) {
    return number.reduce((acc, ele) => {
        return acc + ele;
    });
}
console.log(sumOfNumbers(1, 2, 3, 4, 5, 6));
