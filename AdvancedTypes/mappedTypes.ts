type Personm={
    namem: string;
    agem: number;
};
  
type OptionalPerson={
    [K in keyof Personm]?: Personm[K];
};

const personn: OptionalPerson = {
    namem: 'Alice', 
};
console.log(personn);
  