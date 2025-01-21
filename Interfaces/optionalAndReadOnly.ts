interface animals{
    readonly dogName:string;
}
interface dogs extends animals{
    breed:string;
    age?:number;
}
let myDog1:dogs={dogName:"Tiger",breed:"German"};
console.log(myDog1);
// myDog1.dogname="jacki";give erro