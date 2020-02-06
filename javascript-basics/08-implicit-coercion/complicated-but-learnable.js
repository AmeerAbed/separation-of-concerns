// implicit coercion is complicated, but learnable
//  there are strict & consistent rules that can be learned
const plusTests = [
  { name: 'string, number', args: ['e', 1], expected: 'e1' },
  { name: 'string, null', args: ['e', null], expected: 'enull' },
  { name: 'string, undefined', args: ['e', undefined], expected: 'eundefined' },
  { name: 'string, boolean', args: ['e', false], expected: 'efalse' },
  { name: 'number, number', args: [1, -1], expected: 0 },
  { name: 'number, boolean', args: [1, true], expected: 2 },
  { name: 'number, null', args: [1, null], expected: 1 },
  { name: 'number, undefined', args: [1, undefined], expected: NaN },
  // can you find any failing tests?
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
];
function plus(a, b) {
  return a + b;
}
// this functions explains the rules of implicit coercion for +
//  once you understand the logic in this function,
//  you have understood implicit coercion with + and primitive types
function replication(x, y) {
  if (typeof x === "string" || typeof y === "string") {
    return String(x) + String(y)
  } else {
    return Number(x) + Number(y);
  }
}
// these tests pass when BOTH functions pass the test
plusTests.forEach(function evaluateTestCase(test) {
  const expectedNaN = Number.isNaN(test.expected);
  const plusPasses = expectedNaN
    ? Number.isNaN(plus(...test.args))
    : test.expected === plus(...test.args);
  const replicationPasses = expectedNaN
    ? Number.isNaN(replication(...test.args))
    : test.expected === replication(...test.args);
  console.assert(plusPasses && replicationPasses, test.name);
})

// PS. this replication only works with primitives!
//  you will learn complex rules  about + later on
