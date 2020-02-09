// refactor the function, evaluating your code often
//  to make sure you are refactoring correctly
const allOperators_1_Tests = [
  { name: 'first', args: [0, -3], expected: null },
  { name: 'second', args: [Infinity, false], expected: null },
  { name: 'third', args: [undefined, 0], expected: null },
  { name: 'fourth', args: ['12', 0.4], expected: null },
  { name: 'fifth', args: [0, 0], expected: null },
  { name: 'sixth', args: [8888, 7777], expected: null },
  { name: 'seventh', args: [true, false], expected: null },
  { name: 'eighth', args: [true, NaN], expected: null },
  { name: 'ninth', args: [NaN, NaN], expected: null },
];

const challenge = (a, b) => a % b || !!a;

allOperators_1_Tests.forEach(function evaluateTestCases(test) {
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(challenge(...test.args))
      : test.expected === challenge(...test.args),
    test.name);
});
