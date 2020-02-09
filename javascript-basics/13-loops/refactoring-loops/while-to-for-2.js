// fill in the blanks so that both loops behave the same
//  the tests are correct, there's no need to change them!
const whileToFor_2_Tests = [
  { name: 'first', args: [-60] },
  { name: 'second', args: [3], expected: 15 },
  { name: 'third', args: [-3], expected: 18 },
  { name: 'fourth', args: [0], expected: 0 },
  { name: 'fifth', args: [100], expected: 3 },
  { name: 'sixth', args: [12] },
  { name: 'seventh', args: [67] },
  { name: 'eighth', args: [-4], expected: 15 },
  { name: 'ninth', args: [-2], expected: 20 },
  { name: 'tenth', args: [4], expected: 11 },
];

// refactor this while loop into a for loop
function whileToFor(a) {
  let whileResult = 0;
  let i = 6;
  while (i % 6 !== a) {
    whileResult += i;
    i--;
  }
  return whileResult;
}

whileToFor_2_Tests.forEach(function evaluateTestCase(test) {
  try {
    console.assert(whileToFor(...test.args) === test.expected, test.name);
  } catch (err) {
    if (err.message === 'Loop exceeded 1000 iterations') {
      test.hasOwnProperty('expected')
        ? console.assert(false, test.name + ' ---> 1000+')
        : console.assert(true, test.name + ' ---> 1000+');
    } else { throw err; }
  }
});
