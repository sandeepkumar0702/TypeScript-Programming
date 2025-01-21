"use strict";
class Person {
    personName;
    age;
    constructor(personName, age) {
        this.personName = personName;
        this.age = age;
    }
    greet() {
        console.log(`Hello form ${this.personName}`);
    }
}
let person = new Person("Sandeep", 23);
console.log(person);
person.greet();
