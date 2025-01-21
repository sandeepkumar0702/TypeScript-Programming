//basic type
function greetin(name:string):string{
    return `Hello , ${name}`;
}
console.log(greetin("Sandeep"));


//arrow functions
const greet1=(a:number,b:number):
number=>a+b;
console.log()

//caalback
type MathCallback=(num1:number,num2:number)=>number;
const precessNumber=function(a:number,b:number,callback:MathCallback):number{
    return callback(a,b);
}
let Sum=precessNumber(10,9,(a1,b1)=>a1+b1);
let Product=precessNumber(10,9,(a1,b1)=>a1+b1);
console.log(Sum);
console.log(Product);



