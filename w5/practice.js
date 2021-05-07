const sortDrinkByPrice = function(drinks) {
  drinks.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.name > b.name) ? 1 : -1) : -1 );
  return drinks;
};


console.log(sortDrinkByPrice([
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]));