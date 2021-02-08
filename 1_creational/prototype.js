class Laptop {
  constructor(model, processor, memory, color) {
    this.model = model;
    this.processor = processor;
    this.memory = memory;
    this.color = color;
  }
  produce() {
    return new Laptop(this.model, this.processor, this.memory, this.color);
  }
}

const prototypeMacBook = new Laptop("MacBook", "Intel Core i7", 256, "white");

const MacBookAir = prototypeMacBook.produce();
const MacBookPro = prototypeMacBook.produce();

MacBookAir.model = "MacBook Air";
MacBookAir.color = "gold";

MacBookPro.model = "MacBook Pro";
MacBookPro.processor = "M1";

console.log(MacBookAir);
console.log(MacBookPro);
