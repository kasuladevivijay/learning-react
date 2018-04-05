// ES6 exports and imports
console.log('util.js running');

//Named exports
//syntax ->  1. export const <name> = <body> ; inline
//           2. export { name1, name2 ,...}

// Default exports
// syntax -> 1. export { name1, name2, name3 as default}; name3 is default
//           2. export default name3; 
// Note: export default cannot be given to const..etc in inline

const add = (x, y) => x+y;
const square = (x) => x*x;
const subtract = (x, y) => x-y;

export {add, square, subtract as default}
