// complete the asserts to describe the object

const livingThings = {
  toad: 'amphibian',
  monkey: 'mammal',
  shark: '?'
};

console.assert(livingThings.toad === '', 'livingThings.toad');
console.assert(livingThings.monkey === '', 'livingThings.monkey');
console.assert(livingThings.shark === '', 'livingThings.shark');


livingThings.sheep = 'mammal';
livingThings.ant = 'insect';
livingThings.shark = 'fish'

console.assert(livingThings.ant === '', 'livingThings.ant');
console.assert(livingThings.shark === '', 'livingThings.shark');
console.assert(livingThings.sheep === '', 'livingThings.sheep');


delete livingThings.monkey;

console.assert(livingThings.monkey === '', 'livingThings.monkey');


const favoriteAnimal = 'crow';
livingThings[favoriteAnimal] = 'bird';

console.assert(livingThings.favoriteAnimal === '', 'livingThings.favoriteAnimal');
console.assert(livingThings.crow === '', 'livingThings.crow');

