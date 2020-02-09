const testCases = [
  // replace null with the correct expected value
  { name: 'first', args: [], expected: '' },
  { name: 'second', args: [], expected: '' },
  { name: 'third', args: [], expected: '' },
  { name: 'fourth', args: [], expected: '' },
  { name: 'fifth', args: [], expected: '' },

  // can you find 3 different arguments that result in 'placeholder'?
  { name: 'sixth', args: [], expected: '' },
  { name: 'seventh', args: [], expected: '' },
  { name: 'eighth', args: [], expected: '' },
]

function one(x, y, z) {
  const temp = z;
  z = x;
  x = temp;
  return x + y + z;
}
testCases.forEach(function evaluateTestCase(test) {
  console.assert(one(...test.args) === test.expected,
    '(one)' + test.name);
});

function two(x, y, z) {
  return z + y + x;
}
testCases.forEach(function evaluateTestCase(test) {
  console.assert(two(...test.args) === test.expected,
    '(two)' + test.name);
});
