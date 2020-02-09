// refactor the function, evaluating your code often
//  to make sure you are refactoring correctly
const typesCasting_1_Tests = [
  { name: 'first', args: [true, false], expected: null },
  { name: 'second', args: [3, '3'], expected: null },
  { name: 'third', args: [null, null], expected: null },
  { name: 'fourth', args: [7, 3], expected: null },
  { name: 'fifth', args: ['hi', 'bye'], expected: null },
  { name: 'sixth', args: [true, undefined], expected: null },
];

const challenge = (a, b) => typeof a === typeof b;

typesCasting_1_Tests.forEach(function evaluateTestCases(test) {
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(challenge(...test.args))
      : test.expected === challenge(...test.args),
    test.name);
});
