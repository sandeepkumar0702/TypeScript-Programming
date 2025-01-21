///explicit and string 
function greeting():string{
    return "hello form sandy";
}
console.log(greeting());


///void types
function namasteWorld():void{
    console.log("Hello form dark web");
}
namasteWorld();



///never type
function throwError(message:string):never{
    throw new Error(message);
}
try{
    throwError("Custom Error");
}
catch(err){
    console.log("Custom Error occur");
}



///unio retyriun type
function union(flag:boolean): number | string{
    if(flag){
        return 1;
    }
    return "Sandy";
}
console.log(union(true));
console.log(union(false));



///promise return type

async function fetchData(url:string):Promise<string>{
    let data= await fetch(url);
    console.log(data);
    return data.text();
}
let data=fetchData("https://jsonplaceholder.typicode.com/comments");
console.log(data);


//function return type
function players(factor:number):(value:number)=>number{
    return (factor)=>factor*10;
}
let p4=players(10);
console.log(p4(30));


///generic return type

function identityy<T>(value:T):T{
    return value;
}
console.log(identityy<number>(10));
console.log(identityy("sandeep"));