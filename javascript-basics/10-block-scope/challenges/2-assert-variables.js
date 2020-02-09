// fill in the variables for the assertions

const a = 3;
let b = 3;
{
  const a = 5;
  b = 5;
}
console.assert(_ === 5, 'first');

// -------

let x = 'hi!';
let y = 'hi!';
{
  x = 'hi!';
  let y = 'bye!';
}
x = 'bye!';
console.assert(_ === 'hi!', 'second');
console.assert(_ === 'bye!', 'third');

// -------

let m = 0;
{
  let l = 10;
  const m = 1;
  l = 0;
}
console.assert(_ === 0, 'fourth');
