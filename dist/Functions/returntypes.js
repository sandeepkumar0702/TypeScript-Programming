"use strict";
///explicit and string 
function greeting() {
    return "hello form sandy";
}
console.log(greeting());
///void types
function namasteWorld() {
    console.log("Hello form dark web");
}
namasteWorld();
///never type
function throwError(message) {
    throw new Error(message);
}
try {
    throwError("Custom Error");
}
catch (err) {
    console.log("Custom Error occur");
}
///unio retyriun type
function union(flag) {
    if (flag) {
        return 1;
    }
    return "Sandy";
}
console.log(union(true));
console.log(union(false));
///promise return type
async function fetchData(url) {
    let data = await fetch(url);
    console.log(data);
    return data.text();
}
let data = fetchData("https://jsonplaceholder.typicode.com/comments");
console.log(data);
//function return type
function players(factor) {
    return (factor) => factor * 10;
}
let p4 = players(10);
console.log(p4(30));
///generic return type
function identityy(value) {
    return value;
}
console.log(identityy(10));
console.log(identityy("sandeep"));
