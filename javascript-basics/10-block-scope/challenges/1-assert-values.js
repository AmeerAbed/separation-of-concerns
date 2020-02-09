// fill in the values for the assertions

const a = 3;
console.assert(a === _, 'first');
{
  const a = 5;
  console.assert(a === _, 'second');
}
console.assert(a === _, 'third');

// -------

let x = 3;
console.assert(x === _, 'fourth');
{
  x = 10;
  const y = 5;

  console.assert(x === _, 'fifth');
  console.assert(y === _, 'sixth');
}
console.assert(x === _, 'seventh');

// -------

let m = 3;
console.assert(m === _, 'eighth');
{
  let l = 10;
  const m = 5;
  l = 0;
  console.assert(m === _, 'ninth');
  console.assert(l === _, 'tenth');
}
m = 20;
console.assert(m === _, 'eleventh');
