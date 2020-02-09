const unreachable_2_Tests = [
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
];

function unreachable_2(a) {
  if (arguments.length === 0) throw new Error('no argument provided');

  if (typeof a === 'string') {
    return 'path 1';
  } else if (typeof a !== 'string') {
    return 'path 2';
  } else {
    return 'path 3';
  }
}

unreachable_2_Tests.forEach(function evaluateTestCase(test) {
  console.assert(unreachable_2(...test.args) === test.expected, test.name);
})
