interface Persono {
    nameo: string;
    ageo: number;
    cityo: string;
  }
type OmitCity = Omit<Persono, 'cityo'>;

const personWithoutCity: OmitCity = {
  nameo: 'Alice',
  ageo: 30,
};
console.log(personWithoutCity);