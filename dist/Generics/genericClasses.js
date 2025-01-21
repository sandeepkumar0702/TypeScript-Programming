"use strict";
class Container {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const numContainer = new Container(123);
const strContainer = new Container("Test");
console.log(numContainer.getValue()); // 123
console.log(strContainer.getValue()); // "Test"
