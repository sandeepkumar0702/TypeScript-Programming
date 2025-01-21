class problem{
    static personFullName: string = "I am a static property";
    static staticMethod(): void {
        console.log("I am a static method");
    }
}
console.log(problem.personFullName);
problem.staticMethod();
