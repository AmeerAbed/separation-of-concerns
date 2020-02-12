// replace the _ in the asserts to pass the loops

console.log('\n\n--- pass the tests: find the smallest ---');
const object1 = { a: 1, b: -2, c: 3, d: 12.1, e: 12, f: 0 };

let smallest = Infinity;
for (let key in object1) {
  // complete the loop
}
console.assert(smallest === -2, 'find smallest item in object1');


// ----
console.log('\n\n--- pass the tests: are all false? ---');

function isEveryItemFalse(obj) {
  let allFalse = false;
  // write a loop!
  return allFalse;
}

const booleansObj1 = { a: false, b: false, c: false, d: false, e: false };
const result1 = isEveryItemFalse(booleansObj1);
console.assert(result1 === true, '- booleansObj1 is all false');

const booleansObj2 = { a: true, b: true, c: true, d: true, e: true };
const result2 = isEveryItemFalse(booleansObj2);
console.assert(result2 === false, '-- booleansObj2 is not all false');

const booleansObj3 = { a: true, b: true, c: true, d: true, e: false };
const result3 = isEveryItemFalse(booleansObj3);
console.assert(result3 === false, '--- booleansObj3 is not all false');

const booleansObj4 = { a: false, b: true, c: false, d: false, e: false };
const result4 = isEveryItemFalse(booleansObj4);
console.assert(result4 === false, '---- booleansObj4 is not all false');






