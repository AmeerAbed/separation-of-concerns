// There a few falsey values, everything else is truey
const truthinessTests = [
  { name: 'false', args: [false], expected: 'falsey' },
  { name: 'null', args: [null], expected: 'falsey' },
  { name: 'undefined', args: [undefined], expected: 'falsey' },
  { name: '""', args: [""], expected: 'falsey' },
  { name: "''", args: [''], expected: 'falsey' },
  { name: '``', args: [``], expected: 'falsey' },
  { name: '0', args: [0], expected: 'falsey' },
  { name: '0.0', args: [0.0], expected: 'falsey' },
  { name: '+0', args: [+0], expected: 'falsey' },
  { name: '-0', args: [-0], expected: 'falsey' },
  { name: 'NaN', args: [NaN], expected: 'falsey' },
  // try it yourself! write some more test cases
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
];

function truthiness(x) {
  const coercedToBool = Boolean(x);
  const truthiness = coercedToBool + 'y';
  return truthiness;
}

truthinessTests.forEach(function evaluateTestCase(test) {
  const actual = truthiness(...test.args);
  console.assert(actual === test.expected, test.name);
});
