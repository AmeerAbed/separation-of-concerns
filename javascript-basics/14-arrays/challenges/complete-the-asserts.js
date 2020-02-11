// complete the asserts to describe the arrays

const livingThings = ['toad', 'monkey', 'walrus'];

console.assert(livingThings[1] === '', 'livingThings[1]');
console.assert(livingThings[2] === '', 'livingThings[2]');
console.assert(livingThings[0] === '', 'livingThings[0]');


const numbers = [3, 9, 12, 9];

console.assert(numbers[3] === '', 'numbers[3]');
console.assert(numbers[1] === '', 'numbers[1]');
console.assert(numbers[2] === '', 'numbers[2]');
console.assert(numbers[0] === '', 'numbers[0]');


const mixed = [null, 9, true, '9', 'pulse'];

console.assert(mixed[1] === '', 'mixed[1]');
console.assert(mixed[3] === '', 'mixed[3]');
console.assert(mixed[0] === '', 'mixed[0]');
console.assert(mixed[4] === '', 'mixed[4]');
console.assert(mixed[2] === '', 'mixed[2]');


const complicated = ['a', 'b', 'c', 'f'];
complicated[4] = 'e';
const temp = complicated[2];
complicated[2] = complicated[1];
complicated[1] = temp;

console.assert(complicated[0] === '', 'complicated[0]');
console.assert(complicated[1] === '', 'complicated[1]');
console.assert(complicated[2] === '', 'complicated[2]');
console.assert(complicated[3] === '', 'complicated[3]');
console.assert(complicated[4] === '', 'complicated[4]');

