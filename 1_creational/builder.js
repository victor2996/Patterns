class MacBook {
  constructor() {
    this.model = "Air";
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

  chooseColor(color) {
    this.MacBook.color = color;
    return this;
  }

  build() {
    return this.MacBook;
  }
}

const myMacBook = new MacBookBuilder()
  .updateProcessor("M1")
  .updateMemory("512Gb")
  .chooseColor("Silver")
  .build();

console.log(myMacBook);
