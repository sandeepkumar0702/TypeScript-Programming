"use strict";
class problem {
    static personFullName = "I am a static property";
    static staticMethod() {
        console.log("I am a static method");
    }
}
console.log(problem.personFullName);
problem.staticMethod();
