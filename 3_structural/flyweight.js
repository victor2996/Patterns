class Shape {
  constructor(name) {
    this.figure = name;
  }
}

class ShapeFactory {
  constructor() {
    this.shapes = {};
  }

  create(name) {
    let shape = this.shapes[name];
    if (shape) return shape;
    this.shapes[name] = new Shape(name);
    return this.shapes[name];
  }
}

class DrawShape {
  constructor(shapeFactory) {
    this.shapeFactory = shapeFactory;
  }

  draw(name) {
    this.shapeFactory.create(name);
  }
  getShapes() {
    console.log(shapeFactory.shapes);
  }
}

const shapeFactory = new ShapeFactory();
let drawShape = new DrawShape(shapeFactory);

drawShape.draw("square");
drawShape.draw("triangle");
drawShape.draw("circle");
drawShape.draw("diamond");
drawShape.draw("square");
drawShape.draw("square");
drawShape.draw("square");

drawShape.getShapes();

console.log("Quantity of figures: " + Object.keys(shapeFactory.shapes).length);
