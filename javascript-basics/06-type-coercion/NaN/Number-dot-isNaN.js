// Number.isNaN returns true if the value IS NaN
const isItNaNTests = [
  { name: '01', args: [NaN], expected: true },
  { name: '02', args: [true], expected: false }, // Booleans
  { name: '03', args: [false], expected: false },
  { name: '04', args: ['undefined'], expected: false }, // Strings
  { name: '05', args: ['Infinity'], expected: false },
  { name: '06', args: ['three'], expected: false },
  { name: '07', args: ['3'], expected: false },
  { name: '08', args: ['1e2'], expected: false },
  { name: '09', args: [''], expected: false },
  { name: '10', args: ['.'], expected: false },
  { name: '11', args: ['2.4'], expected: false },
  { name: '12', args: [null], expected: false }, // null
  { name: '13', args: [undefined], expected: false }, // undefined
];

function isItNaN(value) {
  return Number.isNaN(value);
}

isItNaNTests.forEach(function evaluateTestCase(test) {
  const arg = test.args[0];
  const actual = isItNaN(arg);
  console.assert(
    actual === test.expected,
    `${test.name}: (${typeof arg}) ${arg} --> (${typeof actual}) ${actual}`
  );
});
