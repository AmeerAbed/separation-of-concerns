// you can also change the entries in an array after declaring it

const colors = ['red', 'orange', 'blue'];

// remember how .length and indexes are off by 1?
console.assert(colors.length === 3, 'colors.length is 3');
console.assert(colors[3] === undefined, 'but there is no colors[3]!');

// you can add values to an array after creating them
colors[3] = 'purple';
console.assert(colors.length === 4, 'colors.length is now 4');
console.assert(colors[3] === 'purple', "colors[3] is now 'purple'");

// you can also change values after creating an array
colors[0] = 'green';
console.assert(colors.length === 4, 'colors.length is still 4');
console.assert(colors[0] === 'green', "colors[0] is now 'green'");
