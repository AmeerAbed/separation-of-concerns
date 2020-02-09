// immediately invoked function expressions
//  the expanded expressions in this section use iifes
//  they are a way to declare and execute functions ...
//  ... all at once!
// the function only exists for as long as it is executed
// everything you have learned about functions still applies

// variables declared inside iifes are scoped to them
const a = 1;
(() => {
  const a = 2;
})();
console.assert(a === 1, 'a');

// you can pass arguments
const i = 1;
((x) => {
  const j = 2 + x;
  console.assert(j === 3, 'j');
})(i);

// they return values like normal function calls
const x = 1;
const y = ((x) => {
  const z = 2 + x;
  console.assert(z === 3, 'z');
  return z;
})(x);
console.assert(y === 3, 'y');

// and can modify global variables
// this is used in the incrementing examples
//  but is generally a bad practice
let globalVariable = 1;
(() => {
  globalVariable += 1;
})();
console.assert(globalVariable === 2, 'globalVariable');
