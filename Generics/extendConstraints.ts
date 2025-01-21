interface Personal {
    personalName: string;
    personalage: number;
}
function greet<T extends Personal>(personal: T): string {
    return `Hello, ${personal.personalName}`;
}
const userrr:Personal = { personalName: "Sandeep", personalage: 30 };
console.log(greet(userrr));