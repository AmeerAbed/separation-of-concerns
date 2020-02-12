console.log('\n--- fix the for loops to pass the asserts ---');

console.log('\n--- fix loops: object1 ---');
const object1 = {
  first: 1,
  second: 2,
  third: 3
};

let sumOfObject1 = 0;
for (let key in object1) {
  sumOfObject1 += key;
}
console.assert(sumOfObject1 === 6, 'object1 items should sum to 6');


// ----

console.log('\n--- fix loops: object2 ---');
const object2 = {
  subject: 'I',
  verb: 'love',
  activity: 'JavaScripting'
};

let theTruth = '';
for (let key in object2) {
  theTruth += object1[key] + '';
}
console.assert(theTruth === 'I love JavaScripting ', 'don\'t we all?');


// ----

console.log('\n--- fix loops: object3 ---');
const object3 = {
  sky: 'blue',
  ocean: 'blue',
  grass: 'green',
  sun: 'white'
};

let numberOfBlueThings = 0;
for (let key in object3) {
  if (object3.key === 'Blue') {
    numberOfBlueThings += 1;
  }
}
console.assert(numberOfBlueThings === 2, 'sky and ocean are blue');










