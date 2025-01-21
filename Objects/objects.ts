//using object literls
let obj1:{
    objName:string;
    age:number;
}
let User1={objName:"Sandeep",age:22};
console.log(User1);


///using alias
type user3={
    username:string;
    userage:number;
};
let User3:user3={username:"Sandy",userage:24};
console.log(User3);


//using interace
interface Human{
    humanName:String,humanAge:number;
}
let human:Human={humanName:"Sandeep Kumar",humanAge:29};
console.log(human);