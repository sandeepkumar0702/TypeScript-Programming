//union
let id:number | string=10;
console.log(typeof(id) +" = "+id);


///intersection combine two or more types
type Id={id1:number};
type employe=Id & {name:string};
let employee:employe={id1:1,name:"sam"};
console.log(employee);
