// refactor the function, evaluating your code often
//  to make sure you are refactoring correctly
const logicalOperators_2_Tests = [
  { name: 'first', args: [true, false], expected: false },
  { name: 'second', args: [3, '3'], expected: false },
  { name: 'third', args: [null, null], expected: false },
  { name: 'fourth', args: [12, '12'], expected: false },
  { name: 'fifth', args: ['', 0], expected: false },
  { name: 'sixth', args: [false, undefined], expected: false },
  { name: 'seventh', args: ['true', 'Infinity'], expected: false },
  { name: 'eighth', args: [true, NaN], expected: false },
  { name: 'ninth', args: [NaN, NaN], expected: false },
];

// left side before right side for ||
const challenge = (a, b) => !!a || !!b;

logicalOperators_2_Tests.forEach(function evaluateTestCases(test) {
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(challenge(...test.args))
      : test.expected === challenge(...test.args),
    test.name);
});
