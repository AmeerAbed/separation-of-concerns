const writeTests_2_Tests = [
  { name: 'first', args: [], expected: null },
  { name: 'second', args: [], expected: null },
  { name: 'third', args: [], expected: null },
  { name: 'fourth', args: [], expected: null },
  { name: 'fifth', args: [], expected: null },
  { name: 'sixth', args: [], expected: null },
  { name: 'seventh', args: [], expected: null },
  { name: 'eighth', args: [], expected: null },
  { name: 'ninth', args: [], expected: null },
  { name: 'tenth', args: [], expected: null },
];

function writeTests_2(a, b) {
  if (typeof a === typeof b) {
    return b || a;
  } else if (typeof a === 'boolean') {
    return b === Boolean(a);
  } else if (typeof b === 'boolean') {
    return a === Boolean(b);
  }
}

writeTests_2_Tests.forEach(function evaluateTestCase(test) {
  console.assert(writeTests_2(...test.args) === test.expected, test.name);
});
