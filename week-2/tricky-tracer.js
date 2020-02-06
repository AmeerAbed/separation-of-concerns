// you don't need to understand code to step through it ...
//  ... you step through code to understand it!
//  compare stepping through this code with JS Tutor & the Debugger
function trickyTracer(a, b) {
  while (a < b) {
    if (a < (b / 2)) {
      b--;
    } else {
      a++;
    }
  }
  return a - b;
}

const a_1 = 1;
const b_1 = 4;
const result_1 = trickyTracer(a_1, b_1);
console.assert(result_1 === 0, 'first - ' + result_1);

const a_2 = 6;
const b_2 = 4;
const result_2 = trickyTracer(a_2, b_2);
console.assert(result_2 === 2, 'second - ' + result_2);

const a_3 = 1;
const b_3 = 8;
const result_3 = trickyTracer(a_3, b_3);
console.assert(result_3 === 0, 'third - ' + result_3);

const a_4 = 8;
const b_4 = 4;
const result_4 = trickyTracer(a_4, b_4);
console.assert(result_4 === 4, 'fourth - ' + result_4);

const a_5 = 4;
const b_5 = 5;
const result_5 = trickyTracer(a_5, b_5)
console.assert(result_5 === 0, 'fifth - ' + result_5);
