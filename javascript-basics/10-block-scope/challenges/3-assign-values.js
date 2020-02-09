// assign values to the variables to pass the asserts

const a = _;
console.assert(a === '12', 'first');
{
  const a = _;
  console.assert(a === true, 'second');
}
console.assert(a === '12', 'third');

// -------

let x = _;
console.assert(x === null, 'fourth');
{
  x = _;
  const y = _;

  console.assert(x === false, 'fifth');
  console.assert(y === null, 'sixth');
}
console.assert(x === false, 'seventh');

// -------

let m = _;
console.assert(m === 'tall', 'eighth');
{
  let l = _;
  const m = _;
  l = _;
  console.assert(m === 'short', 'ninth');
  console.assert(l === 'mini', 'tenth');
}
m = _;
console.assert(m === 'medium', 'eleventh');
