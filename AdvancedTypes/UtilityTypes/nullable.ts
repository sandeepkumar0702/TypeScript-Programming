type NullableType = string | null | undefined;
type NonNullableString = NonNullable<NullableType>; // Remove null and undefined
const namenull: NonNullableString = "Alice";//allowed
// const nullValue: NonNullableString = null; //error
// const undefinedValue: NonNullableString = undefined;//error
console.log(namenull);
