// a big gotcha!
// implicit coercion is different with incrementing operators

let a = '1';
a = a + 1;
console.assert(a === '11', 'a');


let b = '1';
b += 1;
console.assert(b === '11', 'b');


let c = '1';
c++;
console.assert(c === 2, 'c');
