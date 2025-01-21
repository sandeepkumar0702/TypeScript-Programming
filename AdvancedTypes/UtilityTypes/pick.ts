interface Personl {
    namel: string;
    agel: number;
    cityl: string;
}
  
type PersonNameAndAgel = Pick<Personl, 'namel' | 'agel'>;

const personl: PersonNameAndAgel = {
    namel: 'Alice',
    agel: 30,
};
  
console.log(personl);