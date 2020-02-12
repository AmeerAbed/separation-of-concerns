// do you find yourself doing this?
const coach1 = 'luis';
const coach2 = 'mateus';
const coach3 = 'gregory';

// maybe it's time for this:
const coaches = ['luis', 'mateus', 'gregory'];

// you can access individual entries with square brackes:
//  (confusingly, the first entry is actually 0!)
console.assert(coaches[0] === 'luis', "coaches[0] contains 'luis'");
console.assert(coaches[1] === 'mateus', "coaches[1] contains 'mateus'");
console.assert(coaches[2] === 'gregory', "coaches[2] contains 'gregory'");


// you can find the length of an array like so:
console.assert(coaches.length === 3, 'coaches has 3 entries ...');

// beware!  array indices & array lengths are off by 1:
console.assert(coaches[3] === undefined, '... but there is no 3rd entry ...');
console.assert(coaches[2] === 'gregory', '... only a 2nd!');
