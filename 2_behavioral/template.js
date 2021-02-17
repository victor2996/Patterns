class HouseTemplate {
  buildHouse() {
    this.buildFoundations();
    this.buildPillars();
    this.buildWalls();
    this.buildWindows();
  }

  buildFoundations() {
    console.log("Building foundations");
  }
  buildWindows() {
    console.log("Installing windows");
  }
  buildPillars() {
    throw new Error("You have to build your own pillars");
  }
  buildWalls() {
    throw new Error("You have to build your own walls");
  }
}

class WoodenHouse extends HouseTemplate {
  buildWalls() {
    console.log("Building walls for wooden house");
  }
  buildPillars() {
    console.log("Building pillars for wooden house");
  }
}
class BrickHouse extends HouseTemplate {
  buildWalls() {
    console.log("Building walls for brick house");
  }
  buildPillars() {
    console.log("Building pillars for brick house");
  }
}

const woodenHouse = new WoodenHouse();
woodenHouse.buildHouse();
console.log("\n");
const brickHouse = new BrickHouse();
brickHouse.buildHouse();
