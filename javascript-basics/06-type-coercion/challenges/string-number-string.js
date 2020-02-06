// the function is correct, write the test cases!
//  replace the null values to pass the tests
const stringNumberStringTests = [
  { name: '01', args: ['999999999999999999999'], expected: null },
  { name: '02', args: ['1e3'], expected: null },
  { name: '03', args: ['2'], expected: null },
  { name: '04', args: ['Infinity'], expected: null },
  { name: '05', args: ['1.0.0'], expected: null },
  { name: '06', args: ['four'], expected: null },
  { name: '07', args: ['2.3'], expected: null },
  { name: '08', args: [null], expected: '' }, // is this possible?
  { name: '09', args: [null], expected: '1.3.4' }, // is this possible?
  { name: '10', args: [null], expected: '1/2' }, // is this possible?
  // try writing 7 more passing test cases
];

function stringNumberString(value) {
  if (typeof value !== 'string') throw new TypeError('expected "string"');
  const toNumber = Number(value);
  const backToString = String(toNumber);
  return backToString;
}

stringNumberStringTests.forEach(function evaluateTestCase(test) {
  try {
    const actual = stringNumberString(...test.args);
    console.assert(actual === test.expected, test.name);
  } catch (err) {
    console.assert(false, err.name + ': ' + err.message);
  }
});
