type Primitive = string | number | boolean;
type NonBoolean = Exclude<Primitive, boolean>; // Removes `boolean`
const vvalue: NonBoolean = 42; ///aloowed
console.log(vvalue);