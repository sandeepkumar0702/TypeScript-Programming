"use strict";
class UserData {
    fullName;
    constructor(fullName) {
        this.fullName = fullName;
    }
    get name() {
        return this.fullName;
    }
    set name(newName) {
        if (newName.length < 3) {
            throw new Error("Name must be at least 3 characters long.");
        }
        this.fullName = newName;
    }
}
const userdata = new UserData("Sandeep");
console.log(userdata.name);
user.name = "Sam";
console.log(user.name);
try {
    user.name = "Sa";
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.log("Unexpected error");
    }
}
