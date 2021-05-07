let animals = [
  {name: 'fluffykins', species: 'rabbit'},
  {name: 'Jeter', species: 'dog'},
  {name: 'Archie', species: 'dog'},
  {name: 'kitty', species: 'cat'},
];

let dogs = animals.filter(animal => animal.species === 'dog')

console.log(dogs);

let names1 = animals.map(animal => animal.name + " is a " + animal.species)

console.log(names1);