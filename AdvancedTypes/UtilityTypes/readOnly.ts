interface Productt {
    namet: string;
    pricet: number;
}
  
const productt: Readonly<Productt> = {
    namet: 'Laptop',
    pricet: 999,
};
console.log(productt);
//   productt.pricet = 1000; // Error
  