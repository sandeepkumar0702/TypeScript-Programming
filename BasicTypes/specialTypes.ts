//any can assign any nvalue
/*
let value:any=21;
console.log(value+" and type = "+typeof(value));
value="hlo";
console.log(value+" and type = "+typeof(value));

*/

///unknown   same as any but be can perofrm operation only aftere type check
let valuesssssss:unknown=12;
// console.log( (valuesssssss+10)+" and type = "+typeof(valuesssssss));/// here we can peroform operation with value
valuesssssss="sam";///asign value but can done any operation  with unknown
console.log(valuesssssss+" and type = "+typeof(valuesssssss));


/*
///never value that never occur
function errors():never{
    throw new Error("erorr in file");
}
try{
    errors();
}
catch(err){
    console.log(err);
}
 */