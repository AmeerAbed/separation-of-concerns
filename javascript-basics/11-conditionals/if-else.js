// conditional statements execute different lines of code
//  based on whether the condition is truthy or falsey
const conditionalTests = [
  { name: 'first', args: ['asdf', 0], expected: 'truthy' },
  { name: 'second', args: [0, false], expected: 'falsey' },
  { name: 'third', args: ['', 0], expected: 'truthy' },
  { name: 'fourth', args: [100, false], expected: 'truthy' },
  { name: 'fifth', args: [NaN, ''], expected: 'truthy' },
  { name: 'sixth', args: ['', ''], expected: 'falsey' },
  { name: 'seventh', args: [-1, 1], expected: 'truthy' },
];

function conditional(a, b) {
  if (a || b + a) {
    return 'truthy';
  } else {
    return 'falsey';
  }
}
function coercedToBoolean(x, y) {
  const truthiness = Boolean(x || y + x);
  if (truthiness) {
    return 'truthy';
  } else {
    return 'falsey';
  }
}

conditionalTests.forEach(function evaluateTestCase(test) {
  console.assert(conditional(...test.args) === test.expected,
    test.name + ' - conditional');
  console.assert(coercedToBoolean(...test.args) === test.expected,
    test.name + ' - coercedToBoolean');
})

