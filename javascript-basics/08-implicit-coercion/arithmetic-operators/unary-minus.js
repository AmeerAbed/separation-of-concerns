const unaryMinusTests = [
  { name: 'true', args: [true], expected: -1 },
  { name: 'false', args: [false], expected: -0 },
  { name: '"3"', args: ["3"], expected: -3 },
  { name: '-12', args: [-12], expected: 12 },
  { name: 'undefined', args: [undefined], expected: NaN },
  { name: 'null', args: [null], expected: -0 },
  // finish these test cases
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
]

function unaryMinus(a) {
  return -a;
}
function replication(x) {
  const castX = Number(x);
  return -castX;
}

// tests cases pass when BOTH functions pass
unaryMinusTests.forEach(function evaluateTestCase(test) {
  const expectedNaN = Number.isNaN(test.expected);
  const unaryMinusPasses = expectedNaN
    ? Number.isNaN(unaryMinus(...test.args))
    : test.expected === unaryMinus(...test.args);
  const replicationPasses = expectedNaN
    ? Number.isNaN(replication(...test.args))
    : test.expected === replication(...test.args);
  console.assert(unaryMinusPasses && replicationPasses, test.name);
})

// PS. this replication only works with primitives!
//  you will learn complex rules  about + later on
