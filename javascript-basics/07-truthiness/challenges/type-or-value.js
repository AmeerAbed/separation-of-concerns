// write the expected results
const typeOrValueTests = [
  { name: 'first', args: [true], expected: null },
  { name: 'second', args: ['hi!'], expected: null },
  { name: 'third', args: [undefined], expected: null },
  { name: 'fourth', args: [NaN], expected: null },
  { name: 'fifth', args: ['object'], expected: null },
  { name: 'sixth', args: [null], expected: null },
  { name: 'seventh', args: [0], expected: null },
  { name: 'eighth', args: [12], expected: null },
  { name: 'ninth', args: ['Number'], expected: null },
  { name: 'tenth', args: [''], expected: null },
];

function typeOrValue(x) {
  return (typeof x === 'string') ? x : typeof x;
}

typeOrValueTests.forEach(function evaluateTestCase(test) {
  console.assert(typeOrValue(...test.args) === test.expected, test.name);
});
