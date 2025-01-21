"use strict";
function isArray(value) {
    if (typeof value === 'object' && value !== null) {
        console.log('It is an object or array');
    }
}
isArray([1, 2, 3]);
class Animal {
}
class Dog extends Animal {
}
const dog = new Dog();
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
