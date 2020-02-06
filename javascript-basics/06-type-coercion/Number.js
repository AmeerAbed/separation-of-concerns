// casting to Number is the most complicated coercion
const NumberTests = [
  { name: '01', args: [3], expected: 3 }, // Numbers
  { name: '02', args: [0], expected: 0 },
  { name: '03', args: [1000], expected: 1e3 },
  { name: '04', args: [Infinity], expected: Infinity },
  { name: '05', args: [NaN], expected: NaN },
  { name: '06', args: [true], expected: 1 }, // Booleans
  { name: '07', args: [false], expected: 0 },
  { name: '08', args: ['undefined'], expected: NaN }, // Strings
  { name: '09', args: ['Infinity'], expected: Infinity },
  { name: '10', args: ['three'], expected: NaN },
  { name: '11', args: ['3'], expected: 3 },
  { name: '12', args: ['1e2'], expected: 100 },
  { name: '13', args: ['2.4'], expected: 2.4 },
  { name: '14', args: [null], expected: 0 }, // null
  { name: '15', args: [undefined], expected: NaN }, // undefined
];

function castToNumber(value) {
  return Number(value);
}

NumberTests.forEach(function evaluateTestCase(test) {
  const arg = test.args[0];
  const actual = castToNumber(arg);
  console.assert( // pass if NaN is expected and returned
    (Number.isNaN(test.expected)
      ? Number.isNaN(actual)
      : actual === test.expected),
    `${test.name}: (${typeof arg}) ${arg} --> (${typeof actual}) ${actual}`
  );
});
