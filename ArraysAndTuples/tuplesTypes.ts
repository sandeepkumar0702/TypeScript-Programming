//readonly

let tuple1:readonly [string,number]=["sandeep",21];
console.log(tuple1);


//namesspace tuples
type playerInfo=[name:string,age:number];
let player:playerInfo=["Sandeep",22];
console.log(player);


//unio types
type userInfo=[id:string|number,age:number];
let player1:userInfo=["Sandeep",22];
console.log(player1);
