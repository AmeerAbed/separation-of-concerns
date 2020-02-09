const lessThanTests = [
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

function lessThan(a, b) {
  return a < b;
}

lessThanTests.forEach(function evaluateTestCase(test) {
  console.assert(lessThan(...test.args) === test.expected, test.name);
})
















// // coercion replication for > and primitive values
// function lessThanReplication(a, b) {
//   if (typeof a === 'string' && typeof b === 'string') {
//     const charCodeA = a.charCodeAt();
//     const charCodeB = b.charCodeAt();
//     return charCodeA < charCodeB;
//   } else {
//     const numberA = Number(a);
//     const numberB = Number(b);
//     return numberA < numberB;
//   }
// }
