// for ... of loops are a simpler way to loop through arrays

const arr1 = ['first', 'second', 'third', 'fourth'];

console.log('\n-- arr1: for loop --');

for (let index = 0; index < arr1.length; index++) {
  const item = arr1[index];

  console.log('index:', '(' + typeof index + '),', index);
  console.log('item:', '(' + typeof item + '),', item);
}


console.log('\n-- arr1: for ... of loop --');

for (let item of arr1) {
  console.log('item:', '(' + typeof item + '),', item);
}



// ---- another example ---

const arr2 = [12, true, null, undefined, ''];

console.log('\n\n-- arr2: for loop --');

for (let index = 0; index < arr2.length; index++) {
  console.log('index:', '(' + typeof index + '),', index);
  const item = arr2[index];
  console.log('item:', '(' + typeof item + '),', item);
}


console.log('\n-- arr2: for ... of loop --');

for (let item of arr2) {
  console.log('item:', '(' + typeof item + '),', item);
}





