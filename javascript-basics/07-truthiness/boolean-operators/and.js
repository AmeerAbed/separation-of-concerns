// careful! it's not quite the 'and' you use in conversation
//  replace the null's and fill out the empty test cases
const andTests = [
  { name: '1, 1', args: [1, 1], expected: 1 },
  { name: '0, 1', args: [0, 1], expected: 0 },
  { name: '1, 0', args: [1, 0], expected: 0 },
  { name: '0, 0', args: [0, 0], expected: 0 },
  { name: 'NaN, "true"', args: [NaN, "true"], expected: NaN },
  { name: '"true", NaN', args: ["true", NaN], expected: NaN },
  { name: 'NaN, NaN', args: [NaN, NaN], expected: NaN },
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

function and(a, b) {
  return a && b;
}

andTests.forEach(function evaluateTestCase(test) {
  const actual = and(...test.args);
  console.assert(
    Number.isNaN(test.expected)
      ? Number.isNaN(actual)
      : actual === test.expected,
    test.name);
});
