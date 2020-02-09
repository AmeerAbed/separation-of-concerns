// step: 1
let i = 1; // declare & assign the stepper variable

do {
  // steps: 2, 5, 8
  console.log(i); // do something interesting
  // steps: 3, 6, 9
  i++; // increment the stepper
  // steps: 4, 7, 10
} while (i < 4); // check the condition

// step 11
console.assert(i === 4, 'all done!');
