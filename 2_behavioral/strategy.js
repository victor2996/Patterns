class Transport {
  travelTime() {
    return this.timeTaken;
  }
}

class Car extends Transport {
  constructor() {
    super();
    this.timeTaken = "Traveling by car takes 1 hour";
  }
}

class Bus extends Transport {
  constructor() {
    super();
    this.timeTaken = "Traveling by bus takes 2 hours";
  }
}

class Becycle extends Transport {
  constructor() {
    super();
    this.timeTaken = "Traveling by becycle takes 3 hours";
  }
}

class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

const commute = new Commute();

const car = commute.travel(new Car());
const bus = commute.travel(new Bus());
const becycle = commute.travel(new Becycle());

console.log(car);
console.log(bus);
console.log(becycle);
