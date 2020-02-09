// the ++ and -- operators are often used in loops
// but their behavior can be a bit tricky to understand
// these operators will do two things:
//  update the variable being incremented
//  read the value of the variable being incremented
// once you understand the order of these steps, all becomes clear
// notice! you cannot use 'const' with incrementation operators
//  because they will reassign the variable

const nope = 0;
nope++;

// --- some practice

let a = 0;
a++;
console.assert(a === _, 'a');

let b = 0;
++b;
console.assert(b === _, 'b');

let c = 1;
c--;
console.assert(c === _, 'c');

let d = 1;
--d;
console.assert(d === _, 'd');


// --- a bit tricker

let k = 0;
const kReturned = k++;
console.assert(k === _, 'k');
console.assert(kReturned === _, 'k returned');

let l = 0;
const lReturned = ++l;
console.assert(l === _, 'l');
console.assert(lReturned === _, 'l returned');

let m = 1;
const mReturned = m--;
console.assert(m === _, 'm');
console.assert(mReturned === _, 'm returned');

let n = 1;
const nReturned = --n;
console.assert(n === _, 'n');
console.assert(nReturned === _, 'n returned');


// --- even trickier

let w = 0;
w = w++;
console.assert(w === _, 'w');

let x = 0;
x = ++x;
console.assert(x === _, 'x');

let y = 1;
y = y--;
console.assert(y === _, 'y');

let z = 1;
z = --z;
console.assert(z === _, 'z');
