const greaterThanTests = [
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

function greaterThan(a, b) {
  return a > b;
}

greaterThanTests.forEach(function evaluateTestCase(test) {
  console.assert(greaterThan(...test.args) === test.expected, test.name);
})
















// // coercion replication for > and primitive values
// function greaterThanReplication(a, b) {
//   if (typeof a === 'string' && typeof b === 'string') {
//     const charCodeA = a.charCodeAt();
//     const charCodeB = b.charCodeAt();
//     return charCodeA > charCodeB;
//   } else {
//     const numberA = Number(a);
//     const numberB = Number(b);
//     return numberA > numberB;
//   }
// }
