const ternaryTests = [
  { name: 'true', args: [true, '1', '0'], expected: '1' },
  { name: 'false', args: [false, '1', '0'], expected: '0' },
  { name: 'NaN', args: [NaN, 'first', 'second'], expected: 'second' },
  { name: '"hi!"', args: ['hi!', '?', ':'], expected: '?' },
  { name: '0', args: [0, 'truthy', 'falsey'], expected: 'falsey' },
  // complete these test cases
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
];

function ternary(truthyCheck, first, second) {
  return truthyCheck ? first : second;
}

ternaryTests.forEach(function evaluateTestCase(test) {
  const actual = ternary(...test.args);
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(actual)
      : actual === test.expected,
    test.name);
});
