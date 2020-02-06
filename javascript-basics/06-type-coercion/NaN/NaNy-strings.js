// practice identifying NaNy strings
//   replace all of the '' expected values with true or false
const NumberTests = [
  { name: '01', args: ['undefined'], expected: '' },
  { name: '02', args: ['Infinity'], expected: '' },
  { name: '03', args: ['three'], expected: '' },
  { name: '04', args: ['3'], expected: '' },
  { name: '05', args: ['1e2'], expected: '' },
  { name: '06', args: ['2.4'], expected: '' },
  { name: '07', args: ['NaN'], expected: '' },
  { name: '08', args: [''], expected: '' },
  { name: '09', args: ['0.0'], expected: '' },
  { name: '10', args: ['19l0'], expected: '' },
  { name: '11', args: ['4+4'], expected: '' },
  { name: '12', args: [''], expected: '' },
  { name: '13', args: ['NAN'], expected: '' },
];

function castToNumber(value) {
  const Numbered = Number(value);
  return Number.isNaN(Numbered);
}

NumberTests.forEach(function evaluateTestCase(test) {
  const arg = test.args[0];
  const actual = castToNumber(arg);
  console.assert( // pass if NaN is expected and returned
    (Number.isNaN(test.expected)
      ? Number.isNaN(actual)
      : actual === test.expected),
    `${test.name}: (${typeof arg}) ${arg} --> (${typeof test.expected}) ${test.expected}`
  );
});
