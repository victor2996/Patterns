class Coffee {
  getCost() {
    return this.cost;
  }

  getDescription() {
    return "Standard coffee";
  }
}

class StandardCoffee extends Coffee {
  constructor() {
    super();
    this.cost = 10;
  }
}

class MilkCoffee extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 2;
  }

  getDescription() {
    return this.coffee.getDescription() + ", milk";
  }
}

class WhipCoffee extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 5;
  }

  getDescription() {
    return this.coffee.getDescription() + ", whip";
  }
}

class VanillaCoffee extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 3;
  }

  getDescription() {
    return this.coffee.getDescription() + ", vanilla";
  }
}

class DiscountCoffee extends Coffee {
  constructor(coffee, percent) {
    super();
    this.coffee = coffee;
    this.percent = percent;
  }

  getCost() {
    return this.coffee.getCost() * ((100 - this.percent) / 100);
  }
  getDescription() {
    return this.coffee.getDescription() + `, with discount ${this.percent}%`;
  }
}

let coffee = new StandardCoffee();
console.log(coffee.getCost()); // 10
console.log(coffee.getDescription()); // Standart coffee

coffee = new MilkCoffee(coffee);
console.log(coffee.getCost()); // 12
console.log(coffee.getDescription()); // Standart coffee, milk

coffee = new WhipCoffee(coffee);
console.log(coffee.getCost()); // 17
console.log(coffee.getDescription()); // Standart coffee, milk, whip

coffee = new VanillaCoffee(coffee);
console.log(coffee.getCost()); // 20
console.log(coffee.getDescription()); // Standart coffee, milk, whip, vanilla

coffee = new DiscountCoffee(coffee, 20);
console.log(coffee.getCost()); // 16
console.log(coffee.getDescription()); // Standart coffee, milk, whip, vanilla, with discount 20%

const milkFreeCoffee = new WhipCoffee(new VanillaCoffee(new StandardCoffee()));
console.log(milkFreeCoffee.getCost()); // 18
console.log(milkFreeCoffee.getDescription()); // Standard coffee, vanilla, whip
