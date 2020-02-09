// = and === look similar, but do VERY different things!
// assignment and comparison look similar, but are not!

// it's difficult to explain, but easy to see
// click on "open in JS Tutor" for best results

let variable;
// = assigns a new value in a variable, updating memory
variable = 12;
console.assert(variable === 12, 'first');

// === compares if two values without updating memory
variable === 13;
console.assert(variable === 12, 'second');

// you can capture a comparison's value with an assignment
const firstComparison = variable === 13;
console.assert(firstComparison === false, 'third');

// === compares the CURRENT value assigned to a variable
variable = 13;
const secondComparison = variable === 13;
console.assert(secondComparison === true, 'fourth');

// === comparisons can be written either way
13 === variable;
console.assert(variable === 13, 'fifth');

// = assignments cannot be written either way
13 = variable;
