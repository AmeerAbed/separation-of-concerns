const notTests = [
  { name: 'true', args: [true], expected: false },
  { name: 'false', args: [false], expected: true },
  { name: '"3"', args: ["3"], expected: false },
  { name: '-12', args: [-12], expected: false },
  { name: 'undefined', args: [undefined], expected: true },
  { name: 'null', args: [null], expected: true },
  // finish these test cases
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
]

function not(a) {
  return !a;
}
function replication(x) {
  const castToBoolean = Boolean(x);
  return !castToBoolean;
}

// tests cases pass when BOTH functions pass
notTests.forEach(function evaluateTestCase(test) {
  const expectedNaN = Number.isNaN(test.expected);
  const notPasses = expectedNaN
    ? Number.isNaN(not(...test.args))
    : test.expected === not(...test.args);
  const replicationPasses = expectedNaN
    ? Number.isNaN(replication(...test.args))
    : test.expected === replication(...test.args);
  console.assert(notPasses && replicationPasses, test.name);
})

// PS. this replication only works with primitives!
//  you will learn complex rules  about + later on
