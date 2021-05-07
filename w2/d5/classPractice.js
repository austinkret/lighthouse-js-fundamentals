class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
    this.sauce = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  sauceStyle(sauce) {
    this.sauce.push(sauce);
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
  get size() {
    return this.size;
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}

let pizza1 = new Pizza('large', 'thick crust');
pizza1.sauceStyle('bbq sauce');
pizza1.addTopping("pepperoni");
pizza1.addTopping('peppers');
pizza1.addTopping('pineapple');
console.log('Pizza #1: ', pizza1);

let pizza2 = new Pizza('medium', 'thin crust');
pizza2.sauceStyle('marinara');
pizza2.addTopping('mushroom');
pizza2.addTopping('peppers');
pizza2.addTopping('onion');
pizza2.addTopping('olives');
pizza2.price;
console.log('Pizza #2: ', pizza2);

const pizza = new Pizza();
pizza.size = 's';
pizza.price;
console.log(pizza);