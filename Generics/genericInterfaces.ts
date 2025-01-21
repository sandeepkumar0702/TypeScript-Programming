interface Box<T> {
    value: T;
}
let numberBox: Box<number> = { value: 10 };
let stringBox: Box<string> = { value: "Hello" };
console.log(numberBox.value); // 10
console.log(stringBox.value); // "Hello"
