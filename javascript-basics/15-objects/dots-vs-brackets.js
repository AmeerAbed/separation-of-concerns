// there are two ways to read a value from an object
const greetings = { first: 'hi', last: 'bye' };

// directly by key name with dot notation
console.assert(greetings.first === 'hi', '.first -> "hi"');
console.assert(greetings.last === 'bye', '.last -> "bye"');


// in-directly by the value of a variable with brackets
const arrival = 'first';
const departure = 'last';

console.assert(greetings[arrival] === 'hi', '[arrival] -> "hi"');
console.assert(greetings[departure] === 'bye', '[departure] -> "bye"');


// if a variable's value does not exist in the object ...
const notAGreeting = 'toast';

console.assert(greetings[notAGreeting] === undefined, '[notAGreeting] -> undefined');


// new values can be added with bracket notation
const concernedGreeting = 'concerned';
greetings[concernedGreeting] = 'are you ok?';

console.assert(greetings.concerned === 'are you ok?', '.concerned -> "are you ok?"');


// and deleted with bracket notation
delete greetings[concernedGreeting];

console.assert(greetings.concerned === undefined, '.concerned -> undefined');
