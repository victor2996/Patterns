class Iterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
    this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const macbooks = {
  air: { model: "Air", processor: "M1", price: "1200" },
  pro: { model: "Pro", processor: "Intel Core i7", price: "2200" },
};

const collection = new Iterator(macbooks);

while (collection.hasNext()) {
  console.log(collection.next());
}

//Iterator ES6

// let iterable = ["a", "b", "c"];
// let iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
