class OldCalculator {
  operations(term1, term2, operation) {
    if (operation === "add") {
      return term1 + term2;
    } else if (this.operation === "sub") {
      return term1 - term2;
    } else return NaN;
  }
}

class NewCalculator {
  add(term1, term2) {
    return term1 + term2;
  }
  sub(term1, term2) {
    return term1 - term2;
  }
}

class AdapterNewToOldCalc extends OldCalculator {
  constructor(newCalc) {
    super();
    this.newCalc = newCalc;
  }
  operations(term1, term2, operation) {
    if (operation === "add") {
      return this.newCalc.add(term1, term2);
    } else if (operation === "sub") {
      return this.newCalc.sub(term1, term2);
    } else return NaN;
  }
}

const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, "add")); // 15

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5)); // 15

const adaptedCalc = new AdapterNewToOldCalc(new NewCalculator());
console.log(adaptedCalc.operations(10, 5, "add")); // 15;
