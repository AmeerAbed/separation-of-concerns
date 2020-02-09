// are any paths unreachable?
const nestedUnreachableTests = [
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

function nestedUnreachable(x, y) {
  if (arguments.length < 2) throw new Error('please provide 2 arguments');

  if (x && !y) {
    if (y && !x) {
      return 'path 1';
    } else {
      return 'path 2';
    }
  } else {
    if (x || y) {
      return 'path 3';
    } else {
      return 'path 4';
    }
  }
}

nestedUnreachableTests.forEach(function evaluateTestCase(test) {
  console.assert(nestedUnreachable(...test.args) === test.expected,
    test.name);
})

