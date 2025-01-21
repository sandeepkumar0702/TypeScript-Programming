interface animal{
    name:string;
}
interface dog extends animal{
    breed:string;
}
let myDog:dog={name:"Tiger",breed:"German"};
console.log(myDog);