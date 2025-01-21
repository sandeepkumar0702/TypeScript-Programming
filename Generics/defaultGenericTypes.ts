function wrapper<T = number>(value: T): T[] {
    return [value];
}

console.log(wrapper(5)); // [5]
console.log(wrapper("Hello")); // ["Hello"]
