"use strict";
class Persons {
    personname;
    personage;
    personemail;
    constructor(personname, personage, personemail) {
        this.personname = personname;
        this.personage = personage;
        this.personemail = personemail;
    }
    getAge() {
        return this.personage;
    }
    getEmail() {
        return this.personemail;
    }
}
class Employee extends Persons {
    personrole;
    constructor(personname, personage, personemail, personrole) {
        super(personname, personage, personemail);
        this.personrole = personrole;
    }
    getDetails() {
        return `Name: ${this.personname}, Email: ${this.getEmail()}, Role: ${this.personrole}`;
    }
}
const sandeep = new Employee("Sandeep", 30, "terastupid07@gmail.com", "Developer");
console.log(sandeep.personname);
console.log(sandeep.getAge());
console.log(sandeep.getDetails());
