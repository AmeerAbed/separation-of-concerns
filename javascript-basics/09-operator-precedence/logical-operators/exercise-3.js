// refactor the function, evaluating your code often
//  to make sure you are refactoring correctly
const logicalOperators_3_Tests = [
  { name: 'first', args: [true, false], expected: null },
  { name: 'second', args: [3, '3'], expected: null },
  { name: 'third', args: [null, null], expected: null },
  { name: 'fourth', args: [12, '12'], expected: null },
  { name: 'fifth', args: ['', 0], expected: null },
  { name: 'sixth', args: [false, undefined], expected: null },
  { name: 'seventh', args: ['true', 'Infinity'], expected: null },
  { name: 'eighth', args: [true, NaN], expected: null },
  { name: 'ninth', args: [NaN, NaN], expected: null },
];

// left side before right side for || and &&
const challenge = (a, b) => a || b && c || a;

logicalOperators_3_Tests.forEach(function evaluateTestCases(test) {
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(challenge(...test.args))
      : test.expected === challenge(...test.args),
    test.name);
});
