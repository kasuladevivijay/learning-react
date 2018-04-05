// ES6 imports and exports
import { isAdult, canDrink } from "./person";
// importing default export from a module
import subtract, { add } from "./util";
console.log('app.js running');

console.log(isAdult(21));
console.log(canDrink(22));

console.log(`subtraction: ${subtract(1,2)}`);
console.log(`add: ${add(1,2)}`);