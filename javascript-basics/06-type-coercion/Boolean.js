// casting to Boolean is the second simplest coercion
const BooleanTests = [
  // boolean values remain unchanged
  { name: '01', args: [true], expected: true },
  { name: '02', args: [false], expected: false },
  // anything but 0 & NaN is cast to true
  { name: '03', args: [3], expected: true },
  { name: '04', args: [0], expected: false },
  { name: '05', args: [1000], expected: true },
  { name: '06', args: [Infinity], expected: true },
  { name: '07', args: [NaN], expected: false },
  // null & undefined
  { name: '08', args: [null], expected: false },
  { name: '09', args: [undefined], expected: false },
  // anything but an empty string is cast to true
  { name: '10', args: ['undefined'], expected: true },
  { name: '11', args: ['false'], expected: true },
  { name: '12', args: ['Infinity'], expected: true },
  { name: '13', args: ['three'], expected: true },
  { name: '14', args: ['3'], expected: true },
  { name: '15', args: [''], expected: false },
];

function castToBoolean(value) {
  return Boolean(value);
}

BooleanTests.forEach(function evaluateTestCase(test) {
  const arg = test.args[0];
  const actual = castToBoolean(arg);
  console.assert(
    actual === test.expected,
    `${test.name}: (${typeof arg}) ${arg} --> (${typeof actual}) ${actual}`
  );
});
