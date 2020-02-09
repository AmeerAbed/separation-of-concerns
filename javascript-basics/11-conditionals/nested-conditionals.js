// if, else if, else statements have more than two possible paths
//  only 1 path can be executed
const nestedConditionalTests = [
  // write 3 arguments that reach the first path
  { name: 'path 1, first', args: [], expected: 'path 1' },
  { name: 'path 1, second', args: [], expected: 'path 1' },
  { name: 'path 1, third', args: [], expected: 'path 1' },
  // write 3 arguments that reach the second path
  { name: 'path 2, first', args: [], expected: 'path 2' },
  { name: 'path 2, second', args: [], expected: 'path 2' },
  { name: 'path 2, third', args: [], expected: 'path 2' },
  // write 3 arguments that reach the third path
  { name: 'path 3, first', args: [], expected: 'path 3' },
  { name: 'path 3, second', args: [], expected: 'path 3' },
  { name: 'path 3, third', args: [], expected: 'path 3' },
  // write 3 arguments that reach the fourth path
  { name: 'path 4, first', args: [], expected: 'path 4' },
  { name: 'path 4, second', args: [], expected: 'path 4' },
  { name: 'path 4, third', args: [], expected: 'path 4' },
];

function nestedConditional(x, y) {
  if (arguments.length < 2) throw new Error('please provide 2 arguments');

  if (x) {
    if (y) {
      return 'path 1';
    } else {
      return 'path 2';
    }
  } else {
    if (y) {
      return 'path 3';
    } else {
      return 'path 4';
    }
  }
}

nestedConditionalTests.forEach(function evaluateTestCase(test) {
  console.assert(nestedConditional(...test.args) === test.expected,
    test.name);
})

