class Ingredients {
  getPrice() {
    return this.price || 0;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  setPrice(price) {
    this.price = price;
  }
}

class Chocolate extends Ingredients {
  constructor() {
    super();
    this.setName("Chocolate");
    this.setPrice(30);
  }
}

class Milk extends Ingredients {
  constructor() {
    super();
    this.setName("Milk Chocolate");
    this.setPrice(20);
  }
}
class Nuts extends Ingredients {
  constructor() {
    super();
    this.setName("Chocolate with nuts");
    this.setPrice(10);
  }
}

class Composite extends Ingredients {
  constructor() {
    super();
    this.ingredients = [];
  }
  add(ingredient) {
    this.ingredients.push(ingredient);
  }
  getPrice() {
    return this.ingredients
      .map((ingredient) => ingredient.getPrice())
      .reduce((a, b) => a + b);
  }
}

class ChocolateBar extends Composite {
  constructor() {
    super();
    this.setName("Milka with almonds");
  }
}

const myChocolate = new ChocolateBar();

myChocolate.add(new Chocolate());
myChocolate.add(new Milk());
myChocolate.add(new Nuts());

console.log(`${myChocolate.getName()} price : ${myChocolate.getPrice()}`);

// class Document {
//   constructor(title) {
//     this.title = title;
//     this.signature = null;
//   }
//   sign(signature) {
//     this.signature = signature;
//   }
// }

// class DocumentComposite {
//   constructor(title) {
//     this.items = [];
//     if (title) {
//       this.items.push(new Document(title));
//     }
//   }

//   add(item) {
//     this.items.push(item);
//   }

//   sign(signature) {
//     this.items.forEach((doc) => {
//       doc.sign(signature);
//     });
//   }
// }

// const forms = new DocumentComposite();
// const Form10048 = new Document("Medical First Aid on board ship (10048)");
// const Form4492 = new Document("Ship Security Officer (4492)");
// // const Form11970 = new Document("Advanced Fire Fiting (11970)");
// const Form11970 = new DocumentComposite("Advanced Fire Fiting (11970)");

// forms.add(Form10048);
// forms.add(Form4492);
// forms.add(Form11970);

// forms.sign("John Doe");

// console.log(forms);

// DocumentComposite {
//   items: [
//     Document {
//       title: 'Medical First Aid on board ship (10048)',
//       signature: 'John Doe'
//     },
//     Document {
//       title: 'Ship Security Officer (4492)',
//       signature: 'John Doe'
//     },
//     DocumentComposite {
//        items: [
//          Document {
//            title: 'Advanced Fire Fiting (11970)',
//            signature: 'John Doe'
//          }
//        ]
//      }
//   ]
// }
