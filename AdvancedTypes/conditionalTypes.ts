// type IsString<T> = T extends string ? 'Yes' : 'No';
// type A = IsString<string>; 
// type B = IsString<number>;
function isString<T>(value: T): 'Yes' | 'No' {
    return typeof value === 'string' ? 'Yes' : 'No';
}
let ana=isString("Sam");
let numberr=isString(42);
console.log(ana);
console.log(numberr);

