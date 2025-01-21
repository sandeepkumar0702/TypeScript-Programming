class Container<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numContainer = new Container<number>(123);
const strContainer = new Container<string>("Test");

console.log(numContainer.getValue()); // 123
console.log(strContainer.getValue()); // "Test"
