// do you find yourself doing this?
const bread = 'for dipping';
const chili = 'a soup';
const milk = 'a white beverage';

// maybe it's time for this:
const foods = {
  bread: 'for dipping',
  chili: 'a soup',
  milk: 'drink it'
};

// you can access individual entries by their key
console.assert(foods.bread === 'for dipping', "foods.bread -> 'for dipping'");
console.assert(foods.chili === 'a soup', "foods.chili -> 'a soup'");
console.assert(foods.milk === 'drink it', "foods.milk -> 'drink it'");

// non-existent entries are undefined
console.assert(foods.tables === undefined, 'foods.tables -> undefined');

// you can add items like so:
foods.nuts = 'roasted, salted';
console.assert(foods.nuts === 'roasted, salted', "foods.nuts -> 'roasted, salted'");

// you can reset entries like so:
foods.milk = 'goat or cow?';
console.assert(foods.milk === 'goat or cow?', "foods.milk -> 'goat or cow?'");

// and can remove entries liks so:
delete foods.chili;
console.assert(foods.chili === undefined, 'foods.chili -> undefined');
