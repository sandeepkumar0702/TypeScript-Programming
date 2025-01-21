interface Usern {
    namen: string;
    agen: number;
}
const partialUser: Partial<Usern> = {
    namen: 'Alice',
};
console.log(partialUser);