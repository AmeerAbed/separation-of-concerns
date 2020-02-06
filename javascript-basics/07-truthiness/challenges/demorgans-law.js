// write the tests!
const demorganizeTests = [
  { name: '01', args: [true, true], expected: null },
  { name: '02', args: [true, false], expected: null },
  { name: '03', args: [false, true], expected: null },
  { name: '04', args: [false, false], expected: null },
  { name: '05', args: [], expected: null },
  { name: '06', args: [], expected: null },
  { name: '07', args: [], expected: null },
  { name: '08', args: [], expected: null },
  { name: '09', args: [], expected: null },
  { name: '10', args: [], expected: null },
];

function demorganize(a, b) {
  const firstOne = !(a && b);
  const secondOne = !a || !b;
  return firstOne === secondOne;
}

demorganizeTests.forEach(function evaluateTestCase(test) {
  console.assert(demorganize(...test.args) === test.expected, test.name);
});
