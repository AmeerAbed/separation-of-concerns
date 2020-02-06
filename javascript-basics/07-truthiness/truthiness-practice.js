const truthinessTests = [
  { name: 'first', args: [0.0], expected: null },
  { name: 'second', args: [null], expected: null },
  { name: 'third', args: ['hacking your future!'], expected: null },
  { name: "fourth", args: [''], expected: null },
  { name: 'fifth', args: ["--<(*)>--"], expected: null },
  { name: 'sixth', args: [undefined], expected: null },
  { name: 'seventh', args: [""], expected: null },
  { name: 'eighth', args: ['undefined'], expected: null },
  { name: 'ninth', args: [``], expected: null },
  { name: 'tenth', args: [true], expected: null },
  { name: 'eleventh', args: [1e3], expected: null },
  { name: 'twelfth', args: [0], expected: null },
  { name: 'thirteenth', args: ['null'], expected: null },
  { name: 'fourteenth', args: [-0], expected: null },
  { name: 'fifteenth', args: [NaN], expected: null },
  { name: 'sixteenth', args: [Infinity], expected: null },
  { name: 'seventeenth', args: ['NaN'], expected: null },
  { name: 'eighteenth', args: [+0], expected: null },
  { name: 'nineteenth', args: [false], expected: null },
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
