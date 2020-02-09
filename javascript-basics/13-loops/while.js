// step: 1
let i = 1; // declare & assign the stepper variable

// steps: 2, 5, 8, 11
while (i < 4) { // check the condition
  // steps: 3, 6, 9
  console.log(i); // do something interesting
  // steps: 4, 7, 10
  i++; // increment the stepper
}

// step 12
console.assert(i === 4, 'all done!');
