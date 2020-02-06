const minusTests = [
  { name: 'true, 0', args: [true, 0], expected: 1 },
  { name: 'true, 1', args: [true, 1], expected: 0 },
  { name: 'false, 0', args: [false, 0], expected: 0 },
  { name: 'false, 1', args: [false, 1], expected: -1 },
  // can you find any failing test cases?
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
];

function minus(a, b) {
  return a - b;
}
function replication(x, y) {
  const castX = Number(x);
  const castY = Number(y)
  return castX - castY;
}

// tests cases pass when BOTH functions pass
minusTests.forEach(function evaluateTestCase(test) {
  const expectedNaN = Number.isNaN(test.expected);
  const minusPasses = expectedNaN
    ? Number.isNaN(minus(...test.args))
    : test.expected === minus(...test.args);
  const replicationPasses = expectedNaN
    ? Number.isNaN(replication(...test.args))
    : test.expected === replication(...test.args);
  console.assert(minusPasses && replicationPasses, test.name);
})

// PS. this replication only works with primitives!
//  you will learn complex rules  about + later on
