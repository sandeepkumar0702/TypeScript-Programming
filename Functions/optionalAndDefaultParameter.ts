function greets(num1:number,name?:string):string{
    return `hlo from ${name} with age of ${num1}`;
}
let result1=greets(21,"sam");
console.log(result1);


function greets2(num1:number,name:string="sandeep"):string{
    return `hlo from ${name} with age of ${num1}`;
}
let result2=greets2(22);
console.log(result2);


