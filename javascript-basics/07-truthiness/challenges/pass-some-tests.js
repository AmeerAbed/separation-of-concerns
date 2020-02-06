const mysteryTests = [
  { name: '01', args: ['3', 3], expected: 3 },
  { name: '02', args: ['true', 'false'], expected: 'true' },
  { name: '03', args: [false, true], expected: false },
  { name: '04', args: [true, false], expected: true },
  { name: '05', args: [null, null], expected: null },
  { name: '06', args: [undefined, undefined], expected: undefined },
  { name: '07', args: [12, true], expected: true },
  { name: '08', args: [0, 1], expected: 0 },
  { name: '09', args: [false, ''], expected: '' },
  { name: '10', args: ['', false], expected: false },
];

// one possible solution can be made using:
//   two type checks, a comparison, and a ternary
function mystery(a, b) {

}

mysteryTests.forEach(function evaluateTestCase(test) {
  console.assert(mystery(...test.args) === test.expected, test.name);
});
