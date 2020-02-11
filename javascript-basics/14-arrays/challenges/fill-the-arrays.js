// fill the arrays to pass the asserts

const food = [];

console.assert(food.length === 5, 'food.length');
console.assert(food[4] === 'carrot', 'food[4]');
console.assert(food[2] === 'cookie', 'food[2]');
console.assert(food[0] === 'grape', 'food[0]');
console.assert(food[1] === 'apple', 'food[1]');
console.assert(food[3] === 'milk', 'food[3]');


const animals = [];

console.assert(animals.length === 4, 'animals.length');
console.assert(animals[0] === 'cat', 'animals[0]');
console.assert(animals[1] === animals[3], 'animals[1]');
console.assert(animals[2] === 'mouse', 'animals[2]');
console.assert(animals[3] === 'dolphin', 'animals[3]');


const plants = [];
// leave this code as it is!
const temp = plants[2];
plants[2] = plants[0];
plants[0] = temp;

console.assert(plants.length === 4, 'plants.length');
console.assert(plants[0] === 'carrot', 'plants[0]');
console.assert(plants[1] === 'tree', 'plants[1]');
console.assert(plants[2] === 'bush', 'plants[2]');
console.assert(plants[3] === 'grass', 'plants[3]');


const mixed = [];
// leave this code as it is!
mixed[1] = false;
mixed[0] = mixed[1];
mixed[1] = null;

console.assert(mixed.length === 4, 'mixed.length');
console.assert(mixed[0] === false, 'mixed[0]');
console.assert(mixed[1] === null, 'mixed[1]');
console.assert(mixed[2] === true, 'mixed[2]');
console.assert(mixed[3] === 'tall', 'mixed[3]');

