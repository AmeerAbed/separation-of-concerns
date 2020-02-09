// it is possible to write loops that will never end
//  using 'evaluate code' stops your loops after 1000 iterations
//  and throws a custom error
// using '.. with max iterations = X' will run your code for the debugger
//  with guards against your loops exceeding X iterations
const doWhileLoopTests = [
  { name: 'first', args: [-4] }, // try to predict if the loop will end
  { name: 'second', args: [-3] }, // this is how you pass an excessive loop
  { name: 'third', args: [-2], expected: 0 }, // this is how you fail
  { name: 'fourth', args: [-1] },
  { name: 'fifth', args: [0] },
  { name: 'sixth', args: [1], expected: 0 },
  { name: 'seventh', args: [2], expected: 0 },
  { name: 'eighth', args: [3], expected: 0 },
  { name: 'ninth', args: [4], expected: 0 }
];

function doWhileLoop(x) {
  let doWhileResult = 0;
  let i = 0;
  do {
    doWhileResult += i;
    i++;
  } while (x < i);
  return doWhileResult;
}

doWhileLoopTests.forEach(function evaluateTestCase(test) {
  try {
    console.assert(doWhileLoop(...test.args) === test.expected, test.name);
  } catch (err) {
    if (err.message === 'Loop exceeded 1000 iterations') {
      test.hasOwnProperty('expected')
        ? console.assert(false, test.name + ' ---> 1000+')
        : console.assert(true, test.name + ' ---> 1000+');
    } else { throw err; }
  }
});
