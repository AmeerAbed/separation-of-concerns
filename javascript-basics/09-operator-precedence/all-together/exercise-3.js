// refactor the function, evaluating your code often
//  to make sure you are refactoring correctly
const allOperators_3_Tests = [
  { name: 'first', args: [-3], expected: null },
  { name: 'second', args: [Infinity], expected: null },
  { name: 'third', args: [undefined], expected: null },
  { name: 'fourth', args: ['12'], expected: null },
  { name: 'fifth', args: [0], expected: null },
  { name: 'sixth', args: [8888], expected: null },
  { name: 'seventh', args: [false], expected: null },
  { name: 'eighth', args: [true], expected: null },
  { name: 'ninth', args: [NaN], expected: null },
];

const challenge = (a) => !!+a === Boolean(a);

allOperators_3_Tests.forEach(function evaluateTestCases(test) {
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(challenge(...test.args))
      : test.expected === challenge(...test.args),
    test.name);
});
