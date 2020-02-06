const notTests = [
  { name: '1', args: [1], expected: false },
  { name: '0', args: [0], expected: true },
  { name: 'NaN', args: [NaN], expected: true },
  { name: '"hi!"', args: ['hi!'], expected: false },
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

function not(a) {
  return !a;
}

notTests.forEach(function evaluateTestCase(test) {
  const actual = not(...test.args);
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(actual)
      : actual === test.expected,
    test.name);
});
