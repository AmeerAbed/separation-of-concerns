// replace the _ in the asserts to pass the loops

console.log('\n\n--- pass the tests: find the greatest ---');
const array1 = [1, -2, 3, 12.1, 12, 0];

let greatest = -Infinity;
for (let item of array1) {
  // complete the loop
}
console.assert(greatest === 12.1, 'find greatest item in array1');


// ----
console.log('\n\n--- pass the tests: are all true? ---');

function isEveryItemTrue(arr) {
  let allTrue = true;
  // write a loop
  return allTrue;
}

const booleansArr1 = [true, true, true, true, true];
const result1 = isEveryItemTrue(booleansArr1);
console.assert(result1 === true, '- booleansArr1 is all true');

const booleansArr2 = [false, false, false, false, false];
const result2 = isEveryItemTrue(booleansArr2);
console.assert(result2 === false, '-- booleansArr2 is not all true');

const booleansArr3 = [false, false, true, false, false];
const result3 = isEveryItemTrue(booleansArr3);
console.assert(result3 === false, '--- booleansArr3 is not all true');

const booleansArr4 = [true, true, true, true, false];
const result4 = isEveryItemTrue(booleansArr4);
console.assert(result4 === false, '---- booleansArr4 is not all true');






