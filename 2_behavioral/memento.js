class Memento {
  constructor(value) {
    this.value = value;
  }
}

class Creator {
  save(val) {
    return new Memento(val);
  }
  restore(memento) {
    return memento.value;
  }
}

class CareTaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

const careTaker = new CareTaker();
const creator = new Creator();

careTaker.addMemento(creator.save("a"));
careTaker.addMemento(creator.save("b"));
careTaker.addMemento(creator.save("c"));

console.log(creator.restore(careTaker.getMemento(1)));

console.log(careTaker.values);
