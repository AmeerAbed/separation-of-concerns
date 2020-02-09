// refactor the function, evaluating your code often
//  to make sure you are refactoring correctly
const arithmeticOperators_3_Tests = [
  { name: 'first', args: [12, 0, -3], expected: null },
  { name: 'second', args: [NaN, Infinity, false], expected: null },
  { name: 'third', args: [undefined, null, 0], expected: null },
  { name: 'fourth', args: [12, '12', 0.4], expected: null },
  { name: 'fifth', args: [0, 0, 0], expected: null },
  { name: 'sixth', args: [9999, 8888, 7777], expected: null },
  { name: 'seventh', args: [true, false, 15], expected: null },
  { name: 'eighth', args: [true, NaN, false], expected: null },
  { name: 'ninth', args: [NaN, NaN, NaN], expected: null },
];

const challenge = (a, b, c) => b % c - a * c / b;

arithmeticOperators_3_Tests.forEach(function evaluateTestCases(test) {
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(challenge(...test.args))
      : test.expected === challenge(...test.args),
    test.name);
});
