class Persons {
    public personname: string;
    private personage: number;
    protected personemail: string;
    constructor(personname: string, personage: number, personemail: string) {
        this.personname = personname;
        this.personage = personage;
        this.personemail = personemail;
    }

    public getAge(): number {
        return this.personage;
    }

    protected getEmail(): string {
        return this.personemail;
    }
}

class Employee extends Persons {
    private personrole: string;

    constructor(personname: string, personage: number, personemail: string, personrole: string) {
        super(personname, personage,personemail);
        this.personrole = personrole;
    }

    public getDetails(): string {
        return `Name: ${this.personname}, Email: ${this.getEmail()}, Role: ${this.personrole}`;
    }
}
const sandeep = new Employee("Sandeep", 30, "terastupid07@gmail.com", "Developer");
console.log(sandeep.personname);
console.log(sandeep.getAge());
console.log(sandeep.getDetails());
