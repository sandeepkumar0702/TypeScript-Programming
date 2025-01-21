type Primitivee = string | number | boolean;
type OnlyStringe = Extract<Primitive, string>; // Extracts `string`

const stringValue: OnlyStringe = "hello";//alowed
// const numberValue: OnlyString = 42; // not allowed
console.log(stringValue);
