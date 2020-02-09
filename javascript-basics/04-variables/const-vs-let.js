// const is short for CONSTANT.  a value that never changes

// variables with const cannot be reassigned
const constantVariable = 12;
console.assert(constantVariable === 12, 'first');
// this will throw an execution-phase error
constantVariable = 4;
console.assert(constantVariable === 4, 'second');

// they also cannot be declared without assigning
// this will throw a creation-phase error
const anotherConstantVariable;
console.assert(anotherConstantVariable === undefined, 'third');

// all of these things are possible with let
let variable = 12;
console.assert(variable === 12, 'fourth');
variable = 4;
console.assert(variable === 4, 'fifth');

let anotherVariable;
console.assert(anotherVariable === undefined, 'sixth');

/*
  the exercises in these slides will use let to reassign values
  this is to help you understand how program memory works.

  when writing your own code, it is best to always use const.
  it will take some practice to do this, but is worth it.
  programs with only const are easier to understand and debug
*/
