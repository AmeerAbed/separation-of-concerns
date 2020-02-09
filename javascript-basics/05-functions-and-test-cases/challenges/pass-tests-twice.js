// You can solve these challenges using only:
//  typeof, ===, && (the and operator, this is new!)
// hint, study the "asserting & comparisons" exercise:
//  "strict comparisons"
//  what happens when you put three comparisons in a row?
const testCases = [
  { name: 'first', args: [true, true, true], expected: true },
  { name: 'second', args: [1e5, NaN, Infinity], expected: true },
  { name: 'third', args: ['1', 1, 1.0], expected: false },
  { name: 'fourth', args: [undefined, null, undefined], expected: false },
  { name: 'fifth', args: [null, null, null], expected: true },
  { name: 'sixth', args: ['1', '1', '1.0'], expected: true },
  { name: 'seventh', args: [null, 0, false], expected: false },
];

// write some code to pass the tests
function one() {

}
testCases.forEach(function evaluateTestCase(test) {
  console.assert(one(...test.args) === test.expected,
    '(one)' + test.name);
});

// write different code to pass the same tests!
function two() {

}
testCases.forEach(function evaluateTestCase(test) {
  console.assert(two(...test.args) === test.expected,
    '(two)' + test.name);
});



