"use strict";
function wrapper(value) {
    return [value];
}
console.log(wrapper(5)); // [5]
console.log(wrapper("Hello")); // ["Hello"]
