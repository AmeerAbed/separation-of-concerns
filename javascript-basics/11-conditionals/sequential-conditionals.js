// if, else if, else statements have more than two possible paths
//  only 1 path can be executed
const sequentialConditionalTests = [
  // write 3 arguments that reach neither conditional
  { name: ', first', args: [], expected: '' },
  { name: ', second', args: [], expected: '' },
  { name: ', third', args: [], expected: '' },
  // write 3 arguments that reach the first conditional
  { name: 'a, first', args: [], expected: 'a' },
  { name: 'a, second', args: [], expected: 'a' },
  { name: 'a, third', args: [], expected: 'a' },
  // write 3 arguments that reach the second conditional
  { name: 'b, first', args: [], expected: 'b' },
  { name: 'b, second', args: [], expected: 'b' },
  { name: 'b, third', args: [], expected: 'b' },
  // write 3 arguments that reach both conditionals
  { name: 'ab, first', args: [], expected: 'ab' },
  { name: 'ab, second', args: [], expected: 'ab' },
  { name: 'ab, third', args: [], expected: 'ab' },
];

function sequentialConditional(x, y) {
  if (arguments.length < 2) throw new Error('please provide 2 arguments');

  let result = '';
  if (x && y) {
    result += 'a';
  }
  if (x || y) {
    result += 'b';
  }
  return result;
}

sequentialConditionalTests.forEach(function evaluateTestCase(test) {
  console.assert(sequentialConditional(...test.args) === test.expected,
    test.name);
})

