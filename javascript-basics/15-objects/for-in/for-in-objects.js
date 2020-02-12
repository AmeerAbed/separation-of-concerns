console.log('\n--- for ... in: objects ---')
// for ... in loops are the simplest way to loop through objects

const obj1 = {
  first: 'a',
  second: 'b',
  third: 'c',
};

console.log('\n-- obj1: for ... in --');

for (let key in obj1) {
  const value = obj1[key];

  console.log('key:', '(' + typeof key + '),', key);
  console.log('value:', '(' + typeof value + '),', value);
}



// ---- another example ---

const obj2 = {
  aString: 'hoy',
  aNumber: 83,
  aBoolean: false,
};

console.log('\n-- obj2: for ... in --');

for (let key in obj2) {
  const value = obj2[key];

  console.log('key:', '(' + typeof key + '),', key);
  console.log('value:', '(' + typeof value + '),', value);
}





