// if, else if, else statements have more than two possible paths
//  only 1 path can be executed.
//  after one of the conditions is met, no other is executed
const ifElseIfElseTests = [
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

function ifElseIfElse(x) {
  if (arguments.length === 0) throw new Error('test case is empty');

  if (typeof x === 'number') {
    return 'path 1';
  } else if (typeof x === 'string') {
    return 'path 2';
  } else {
    return 'path 3';
  }
}

ifElseIfElseTests.forEach(function evaluateTestCase(test) {
  console.assert(ifElseIfElse(...test.args) === test.expected,
    test.name);
})

