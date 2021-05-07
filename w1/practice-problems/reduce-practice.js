const groceryList = {
  items: [
    {food: 'banana', price: 4, quantity: 8},
    {food: 'steak', price: 12, quantity: 1},
    {food: 'chips', price: 3, quantity: 2}
  ]
};

const totalGrocery = cost => cost.items
  .reduce((prev, cur) => prev + (cur.price * cur.quantity), 0);

let result = totalGrocery(groceryList);
console.log(result);

