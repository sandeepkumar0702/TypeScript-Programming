"use strict";
class Employees {
    display() {
        console.log(`salary = ${this.calculateSalary()}`);
    }
}
class developer extends Employees {
    constructor() {
        super();
    }
    calculateSalary() {
        return 100000;
    }
}
let dev = new developer();
dev.display();
