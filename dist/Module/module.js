import { add, subtract } from './importExport';
console.log(`5 + 3 = ${add(5, 3)}`);
console.log(`10 - 7 = ${subtract(10, 7)}`);
const options = { precision: 2 };
console.log('MathOptions:', options);
