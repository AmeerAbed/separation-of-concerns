const notNotTests = [
  { name: 'true', args: [true], expected: true },
  { name: 'false', args: [false], expected: false },
  { name: '"3"', args: ["3"], expected: true },
  { name: '-12', args: [-12], expected: true },
  { name: 'undefined', args: [undefined], expected: false },
  { name: 'null', args: [null], expected: false },
  // finish these test cases
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
]

function notNot(a) {
  return !!a;
}
function replication(x) {
  const castToBoolean = Boolean(x);
  const not = !castToBoolean;
  const notNot = !not;
  return notNot;
}

// tests cases pass when BOTH functions pass
notNotTests.forEach(function evaluateTestCase(test) {
  const expectedNaN = Number.isNaN(test.expected);
  const notNotPasses = expectedNaN
    ? Number.isNaN(notNot(...test.args))
    : test.expected === notNot(...test.args);
  const replicationPasses = expectedNaN
    ? Number.isNaN(replication(...test.args))
    : test.expected === replication(...test.args);
  console.assert(notNotPasses && replicationPasses, test.name);
})

// PS. this replication only works with primitives!
//  you will learn complex rules  about + later on
