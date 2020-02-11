// which entries are matching? replace the nulls to pass the asserts

const array1 = ['a', 'b', 'c', 'd'];
const otherArray1 = ['b', 'd', 'a', 'c'];

console.assert(array1[2] === otherArray1[null], 'array1[2]');
console.assert(array1[0] === otherArray1[null], 'array1[0]');
console.assert(array1[3] === otherArray1[null], 'array1[3]');
console.assert(array1[1] === otherArray1[null], 'array1[1]');


const array2 = [true, false, ''];
const otherArray2 = [true, false, ''];
// leave this code!
const temp = otherArray2[1];
otherArray2[1] = otherArray2[2];
otherArray2[2] = temp;

console.assert(array2[2] === otherArray2[null], 'array2[2]');
console.assert(array2[0] === otherArray2[null], 'array2[0]');
console.assert(array2[1] === otherArray2[null], 'array2[1]');


const array3 = ['hi', 'bye', 'middle', 'end'];
const otherArray3 = ['bye', 'hi'];
// leave this code!
otherArray3[1] = array3[2];
otherArray3[3] = array3[0];
otherArray3[2] = array3[3];

console.assert(array3[0] === otherArray3[null], 'array3[0]');
console.assert(array3[1] === otherArray3[null], 'array3[1]');
console.assert(array3[2] === otherArray3[null], 'array3[2]');
console.assert(array3[3] === otherArray3[null], 'array3[3]');

