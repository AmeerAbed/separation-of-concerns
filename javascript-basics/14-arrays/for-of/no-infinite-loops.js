// using for ... of, you can't accidentally get an infinite loop!
// the loop will automatically run for the length of the array

const array = ['first', 'second', 'third', 'fourth'];

console.log('\n-- maybe infinite?: for loop --');

for (let index = 0; index < array.length; -index) {
  const item = array[index];
  console.log('item:', '(' + typeof item + '),', item);
}


console.log('\n-- never infinite!: for ... of loop --');

for (let item of array) {
  console.log('item:', '(' + typeof item + '),', item);
}



// well, unless you keep adding things to your array


const growingArray = ['hi'];

for (let item of growingArray) {
  growingArray.push(item);
}
