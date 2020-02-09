// the rules you learn here don't apply to 'var' variables
//  you will eventually need to learn var and hoisting,
// For now write your code with only 'let' and 'const'
//  you will avoid many errors, bugs and confusions this way

console.assert(variable === undefined, 'first');

variable = true;
console.assert(variable === true, 'second');

{
  var variable = null;
  console.assert(variable === null, 'third');
}

console.assert(variable === null, 'fourth');
