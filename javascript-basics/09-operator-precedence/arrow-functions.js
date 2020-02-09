// interlude!  ES6 arrow functions.
//  a simpler syntax for writing functions
// you can use them everywhere you have used
//  ES5 "function" functions for now.
//  there are differences, but none matter for now

const expressionTests = [
  { name: 'first', args: [2, 6], expected: 8 },
  { name: 'second', args: [true, false], expected: 1 },
  { name: 'third', args: [null, 'hi!'], expected: 'nullhi!' },
  { name: 'fourth', args: [.1, .2], expected: .30000000000000004 },
];

function es5(a, b) {
  return a + b;
}

// in braces with a 'return' if it is not
const es6BlockReturn = (a, b) => {
  return a + b;
}

// in one line if the function is a single expression
const es6Inline = (a, b) => a + b;

expressionTests.forEach(function evaluatingTestCase(test) {
  console.assert(es5(...test.args) === test.expected, test.name + ' - es5');
  console.assert(es5(...test.args) === test.expected, test.name + ' - es6BlockReturn');
  console.assert(es5(...test.args) === test.expected, test.name + ' - es6Inline');
})
