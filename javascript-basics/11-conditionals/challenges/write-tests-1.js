const writeTests_1_Tests = [
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

function writeTests_1(a, b) {
  if (a && b) {
    return typeof a === typeof b;
  } else if (!a && !b) {
    return typeof a !== typeof b;
  } else {
    return a ? a : b;
  }
}

writeTests_1_Tests.forEach(function evaluateTestCase(test) {
  console.assert(writeTests_1(...test.args) === test.expected, test.name);
});
