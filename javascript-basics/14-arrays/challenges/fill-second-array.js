// complete the second array to pass the asserts

const array1 = ['a', 'b', 'c', 'd'];
const otherArray1 = [];

console.assert(otherArray1.length === 4, 'otherArray1.length');
console.assert(array1[2] === otherArray1[0], 'array1[2]');
console.assert(array1[0] === otherArray1[3], 'array1[0]');
console.assert(array1[3] === otherArray1[1], 'array1[3]');
console.assert(array1[1] === otherArray1[2], 'array1[1]');


const array2 = [false, true, 0, 1, null];
const otherArray2 = [];

console.assert(otherArray2.length === 5, 'otherArray2.length');
console.assert(array2[2] === otherArray2[1], 'array2[2]');
console.assert(array2[1] === otherArray2[4], 'array2[1]');
console.assert(array2[0] === otherArray2[2], 'array2[0]');
console.assert(array2[4] === otherArray2[3], 'array2[4]');
console.assert(array2[3] === otherArray2[0], 'array2[3]');


const array3 = ['a', 'b', 'c', 'd'];
const otherArray3 = [];
// leave this code!
otherArray3[1] = array3[2];
otherArray3[0] = array3[3];

console.assert(otherArray3.length === 4, 'otherArray3.length');
console.assert(array3[0] === otherArray3[3], 'array3[0]');
console.assert(array3[1] === otherArray3[2], 'array3[1]');
console.assert(array3[2] === otherArray3[1], 'array3[2]');
console.assert(array3[3] === otherArray3[0], 'array3[3]');
