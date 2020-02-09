// write the test cases!
const superChallengeTests = [
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

function superChallenge(x, y) {
  if (typeof x !== 'number' && typeof y !== 'string') {
    throw new TypeError('x should be "number" or "string"');
  }
  if (typeof y !== 'number' && typeof y !== 'string') {
    throw new TypeError('y should be "number" or "string"');
  }
  const added = x + y;
  const castToNumber = Number(added);

  if (Number.isNaN(castToNumber)) {
    throw new TypeError('result should be a valid number');
  }
  return castToNumber;
}

superChallengeTests.forEach(function evaluateTestCase(test) {
  console.assert(
    superChallenge(...test.args) === test.expected,
    test.name
  );
})
