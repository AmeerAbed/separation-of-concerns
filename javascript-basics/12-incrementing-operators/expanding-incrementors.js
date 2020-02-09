// expanding these operators will explicitly show both steps
//  this may help to understand their behavior


let a = 0;
const b = (() => { //  = a++;
  const result = a;
  a = a + 1;
  return result;
})();
console.assert(a === _, 'a');
console.assert(b === _, 'b');


let g = 0;
const h = (() => { //  = ++g;
  g = g + 1;
  return g;
})();
console.assert(g === _, 'g');
console.assert(h === _, 'h');



let n = 0;
const o = (() => { //  = n--;
  const result = n;
  n = n - 1;
  return result;
})();
console.assert(n === _, 'n');
console.assert(o === _, 'o');


let x = 0;
const y = (() => { //  = --x;
  x = x - 1;
  return x;
})();
console.assert(x === _, 'x');
console.assert(y === _, 'y');
