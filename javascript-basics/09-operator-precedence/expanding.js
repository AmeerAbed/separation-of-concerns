// refactoring 1-line challenges into multiple lines
//  is a helpful technique for learning operator precedence
//  and for stepping through / debugging your code
// the technique is to rewrite a complex expressions
//  onto multiple lines, with one operator per line
// you can expand an challenge without understanding it
//  in fact, expanding it will help you understand it!
const challengeTests = [
  { name: 'first', args: [2, 6], expected: 8 },
  { name: 'fourth', args: [true, false], expected: 1 },
  { name: 'third', args: [null, 'hi!'], expected: 'nullhi!' },
];

const challenge = (a, b) => a + b || !a;

// // step 1
// const challenge = (a, b) => { // a + b || !a
//   const operation1 = a + b;
//   return operation1 || !a;
// }

// // step 2
// const challenge = (a, b) => { // a + b || !a
//   const operation1 = a + b;
//   const operation2 = !a;
//   return operation1 || operation2;
// }

// // step 3
// const challenge = (a, b) => { // a + b || !a
//   const operation1 = a + b;
//   const operation2 = !a;
//   const operation3 = operation1 || operation2;
//   return operation3;
// }

challengeTests.forEach(function evaluatingTestCase(test) {
  console.assert(challenge(...test.args) === test.expected, test.name);
})
