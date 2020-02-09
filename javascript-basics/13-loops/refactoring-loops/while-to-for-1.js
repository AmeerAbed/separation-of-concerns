// refactoring between for & while loops will help to learn the parts
//  once you understand how to refactor loops
//  you can do it without even understanding what it does!

// fill in the blanks so that both loops behave the same
//  the tests are correct, there's no need to change them!
const whileToFor_1_Tests = [
  { name: 'first', args: [-60] },
  { name: 'second', args: [3] },
  { name: 'third', args: [-3] },
  { name: 'fourth', args: [0], expected: 0 },
  { name: 'fifth', args: [100], expected: 2450 },
  { name: 'sixth', args: [12], expected: 30 },
  { name: 'seventh', args: [67] },
  { name: 'eighth', args: [-4] },
  { name: 'ninth', args: [-2] },
  { name: 'tenth', args: [4], expected: 2 },
];

// refactor this while loop into a for loop
function whileToFor(a) {
  let whileResult = 0;
  let i = 0;
  while (i !== a) {
    whileResult += i;
    i += 2;
  }
  return whileResult;
}

whileToFor_1_Tests.forEach(function evaluateTestCase(test) {
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
