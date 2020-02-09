// variables (let, const) declared between curley braces
//  are "scoped" to those braces, or "block" of code
// the variables will only exist in memory while the program
//  is executing the lines between those braces

{
  const huh = 'huh?';
}
console.assert(huh === 'huh?', 'first');

// variables declared outside the block ar available inside the block

const x = 'hi!';
{
  console.assert(x === 'hi!', 'second');
}
console.assert(x === 'hi!', 'third');

// declaring variables of the same name inside a block
//  will make a new variable, ignoring the outer one

const x = 'hi!';
{
  const x = 'bye!';
  console.assert(x === 'bye!', 'fourth');
}
console.assert(x === 'hi!', 'fifth');

// constant variables still cannot be reassigned

const last = Infinity;
{
  last = NaN;
}
console.assert(last === _, 'sixth');

