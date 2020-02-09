// truthiness is if a value casts to true or false
//  this applies to complex expressions as well!
//  when is this complex expression truthy? or falsy?
const isItTruthyTests = [
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

const isItTruthy = (a, b) => {
  const expression = a % b || !!a;
  const truthiness = Boolean(expression);
  return truthiness;
}

isItTruthyTests.forEach(function evaluateTestCases(test) {
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(isItTruthy(...test.args))
      : test.expected === isItTruthy(...test.args),
    test.name);
});
