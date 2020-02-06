// casting to String is the simplest coercion
const StringTests = [
  // string values remain unchanged
  { name: '01', args: ['any string'], expected: 'any string' },
  // casting to String puts quotes around any other value
  { name: '02', args: [3], expected: '3' },
  { name: '03', args: [NaN], expected: 'NaN' },
  { name: '04', args: [Infinity], expected: 'Infinity' },
  { name: '05', args: [1000], expected: '1000' },
  { name: '06', args: [1e3], expected: '1000' }, // ?
  { name: '07', args: [1.0], expected: '1' }, // ?
  { name: '08', args: [true], expected: 'true' },
  { name: '09', args: [false], expected: 'false' },
  { name: '10', args: [null], expected: 'null' },
  { name: '11', args: [undefined], expected: 'undefined' },
  // write at least 5 more test cases for the String function
];

function castToString(value) {
  return String(value);
}

StringTests.forEach(function evaluateTestCase(test) {
  const arg = test.args[0];
  const actual = castToString(arg);
  console.assert(
    actual === test.expected,
    `${test.name}: (${typeof arg}) ${arg} --> (${typeof actual}) ${actual}`
  );
});
