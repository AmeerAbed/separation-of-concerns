console.log('\n-- for ... in arrays --- ');
// for ... in actually works with arrays as well!
// it's just a little different than for ... of

const arr1 = ['first', 'second', 'third', 'fourth'];

console.log('\n-- arr1: for ... in --');

for (let index in arr1) {
  const item = arr1[index];

  console.log('index:', '(' + typeof index + '),', index);
  console.log('item:', '(' + typeof item + '),', item);
}



// ---- another example ---

const arr2 = [12, true, null, undefined, ''];

console.log('\n-- arr2: for ... in --');

for (let index in arr2) {
  const item = arr2[index];

  console.log('index:', '(' + typeof index + '),', index);
  console.log('item:', '(' + typeof item + '),', item);
}





