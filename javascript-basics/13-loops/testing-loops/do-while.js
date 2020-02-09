const doWhileLoopTests = [
  { name: 'first', args: [-4], expected: 1 },
  { name: 'second', args: [-3], expected: 1 },
  { name: 'third', args: [-2], expected: 1 },
  { name: 'fourth', args: [-1], expected: 1 },
  { name: 'fifth', args: [0], expected: 1 },
  { name: 'sixth', args: [1], expected: 1 },
  { name: 'seventh', args: [2], expected: 1 },
  { name: 'eighth', args: [3], expected: 3 },
  { name: 'ninth', args: [4], expected: 6 },
  // fill in the rest of the expected values
  { name: 'tenth', args: [5], expected: null },
  { name: 'eleventh', args: [6], expected: null },
  { name: 'twelfth', args: [7], expected: null },
  { name: 'thirteenth', args: [8], expected: null },
  { name: 'fourteenth', args: [9], expected: null },
  { name: 'fifteenth', args: [10], expected: null }
];

function doWhileLoop(x) {
  let doWhileResult = 0;
  let i = 1;
  do {
    doWhileResult += i;
    i++;
  } while (i < x);
  return doWhileResult;
}

doWhileLoopTests.forEach(function evaluateTestCase(test) {
  console.assert(doWhileLoop(...test.args) === test.expected, test.name);
});

