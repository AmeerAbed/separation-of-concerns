// steps: 1, 2 -> declare/assign then check
// steps: 4, 5, 7, 8, 10, 11 -> increment then check
for (let i = 1; i < 4; i++) {
  // steps: 3, 6, 9
  console.log(i); // do something interesting
}

// step: 12
console.assert(i === 4, 'all done');
