const passTests_2_Tests = [
  { name: 'if  1', args: [9, 9], expected: 'if' },
  { name: 'if  2', args: [true, true], expected: 'if' },
  { name: 'if  3', args: [undefined, undefined], expected: 'if' },
  { name: 'if  4', args: ["hi!", 'hi!'], expected: 'if' },
  { name: 'if  5', args: [1000.0, 1000], expected: 'if' },
  { name: 'else if  1', args: ['3', '4'], expected: 'else if' },
  { name: 'else if  2', args: ['hello', NaN], expected: 'else if' },
  { name: 'else if  3', args: [4, 5], expected: 'else if' },
  { name: 'else if  4', args: ['true', 'false'], expected: 'else if' },
  { name: 'else if  5', args: [NaN, NaN], expected: 'else if' },
  { name: 'else  1', args: [5, '5'], expected: 'else' },
  { name: 'else  2', args: ['1000', 1000], expected: 'else' },
  { name: 'else  3', args: ['0', 0], expected: 'else' },
  { name: 'else  4', args: [true, 1], expected: 'else' },
  { name: 'else  5', args: [false, '0'], expected: 'else' },
];

// you can pass the tests using only
//  primitive values
//  Number, String, Boolean
//  typeof, ===, !==
// careful of unreachable blocks! are any of yours unreachable?
function passTests_2(a, b) { }

passTests_2_Tests.forEach(function evaluateTestCase(test) {
  console.assert(passTests_2(...test.args) === test.expected, test.name);
});
