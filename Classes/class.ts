class Person{
    personName:string;
    age:number;
    constructor(personName:string,age:number){
        this.personName=personName;
        this.age=age;
    }
    greet():void{
        console.log(`Hello form ${this.personName}`);
    }
}
let person=new Person("Sandeep",23);
console.log(person);
person.greet();