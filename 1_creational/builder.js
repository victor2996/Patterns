class MacBook {
  constructor() {
    this.model = "Air";
    this.processor = "IntelCore i7";
    this.color = "Silver";
  }
}

class MacBookBuilder {
  constructor() {
    this.MacBook = new MacBook();
  }

  updateProcessor(processor) {
    this.MacBook.processor = processor;
    return this;
  }

  updateMemory(memory) {
    this.MacBook.memory = memory;
    return this;
  }

  changeColor(color) {
    this.MacBook.color = color;
    return this;
  }

  build() {
    return this.MacBook;
  }
}

const myMacBook1 = new MacBookBuilder().updateMemory("512Gb").build();

console.log(myMacBook1);

const myMacBook2 = new MacBookBuilder()
  .updateProcessor("M1")
  .updateMemory("1Tb")
  .changeColor("Gold")
  .build();

console.log(myMacBook2);
