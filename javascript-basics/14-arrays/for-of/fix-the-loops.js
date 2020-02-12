// fix the for loops to pass the asserts

console.log('\n\n--- fix loops: array1 ---');
const array1 = [1, 2, 3];

let sumOfArray1 = 0;
for (let item of array1) {
  sumOfArray1 += array1[item];
}
console.assert(sumOfArray1 === 6, 'array1 items should sum to 6');


// ----

console.log('\n--- fix loops: array2 ---');
const array2 = ['I', 'love', 'JavaScript', '!'];

let theTruth = '';
for (let item of array2) {
  theTruth += item + '';
}
console.assert(theTruth === 'I love JavaScript ! ', 'don\'t we all?');


// ----

console.log('\n--- fix loops: array3 ---');
const array3 = ['speed', 'of', 'light'];

let universalConstant = '';
for (let item of array2) {
  universalConstant += item.toUpperCase() + '-';
}

console.assert(universalConstant === 'SPEED_OF_LIGHT_', '~ 300,000 km/s');










