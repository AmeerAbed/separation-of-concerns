// don't change the tests! just the function
const passTests_1_Tests = [
  { name: 'if 1', args: [true, 9], expected: 'if' },
  { name: 'if 2', args: [true, 'hello'], expected: 'if' },
  { name: 'if 3', args: [undefined, null], expected: 'if' },
  { name: 'if 4', args: ['', 0], expected: 'if' },
  { name: 'if 5', args: ['false', 'NaN'], expected: 'if' },
  { name: 'else 1', args: [true, ''], expected: 'else' },
  { name: 'else 2', args: [100, NaN], expected: 'else' },
  { name: 'else 3', args: ['true', false], expected: 'else' },
  { name: 'else 4', args: [true, false], expected: 'else' },
  { name: 'else 5', args: [0, '0'], expected: 'else' },
];

// you can pass the tests using only
//  primitive values
//  Number, String, Boolean
//  typeof, ===, !==
// careful of unreachable blocks! are any of yours unreachable?
function passTests_1(a, b) { }

passTests_1_Tests.forEach(function evaluateTestCase(test) {
  console.assert(passTests_1(...test.args) === test.expected, test.name);
});
