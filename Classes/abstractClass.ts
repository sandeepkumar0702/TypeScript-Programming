abstract class Employees{
    abstract calculateSalary():number;
    display():void{
        console.log(`salary = ${this.calculateSalary()}`);
    }
}
class developer extends Employees{
    constructor(){
        super();
    }
    calculateSalary(): number {
        return 100000;
    }
}
let dev=new developer();
dev.display();