// loose equality is famously confusing in JS ...
//  ... but it can be understood!
//  mastering == shows a real understanding of JavaScript
//  https://dorey.github.io/JavaScript-Equality-Table/
const looseEqualityTests = [
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
  { name: '', args: [], expected: null },
];

function looseEquality(a, b) {
  return a == b;
}

looseEqualityTests.forEach(function evaluateTestCase(test) {
  console.assert(looseEquality(...test.args) === test.expected, test.name);
})















// const testsToStudy = [
//   { name: 'null, undefined', args: [null, undefined], expected: true },
//   { name: 'undefined, null', args: [undefined, null], expected: true },
//   { name: 'null, null', args: [null, null], expected: true },
//   { name: 'undefined, undefined', args: [undefined, undefined], expected: true },
//   { name: 'null, "anything else"', args: [null, "anything else"], expected: false },
//   { name: 'undefined, "anything else"', args: [undefined, "anything else"], expected: false },
//   { name: 'true, false', args: [true, false], expected: false },
//   { name: 'false, false', args: [false, false], expected: true },
//   { name: '3, 3', args: [3, 3], expected: true },
//   { name: '3.0, 3', args: [3.0, 3], expected: true },
//   { name: '+0, -0', args: [+0, -0], expected: true },
//   { name: '"\t", "\t"', args: ["\t", '\t'], expected: true },
//   { name: '-3, +3', args: [-3, +3], expected: false },
//   { name: '3, "3"', args: [3, "3"], expected: true },
//   { name: '"3", 3', args: ["3", 3], expected: true },
//   { name: '"3", "3"', args: ["3", "3"], expected: true },
//   { name: 'true, 1', args: [true, 1], expected: true },
//   { name: 'false, 0', args: [false, 0], expected: true },
//   { name: 'false, ""', args: [false, ""], expected: true },
//   { name: '0, ""', args: [0, ""], expected: true },
//   { name: '"e", true', args: ["e", true], expected: false },
//   { name: 'undefined, ""', args: [undefined, ""], expected: false },
// ]

// // replication that works for comparing primitives
// function looseEqualityReplication(a, b) {
//   if (a === null || a === undefined) {
//     return b === null || b === undefined;
//   } else if (typeof a === typeof b) {
//     return a === b;
//   } else {
//     const castA = Number(a);
//     const castB = Number(b);
//     return castA === castB;
//   };
// }
