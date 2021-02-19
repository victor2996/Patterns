class Computer {
  getPower() {
    console.log("Current supply");
  }
  startBios() {
    console.log("Start BIOS");
  }
  showLoadingScreen() {
    console.log("Loading the screen");
  }
  ready() {
    console.log("Ready to be used!");
  }
  closeEverything() {
    console.log("Closing everything");
  }
  sooth() {
    console.log("Turning off the screen");
  }
  cutOffPower() {
    console.log("current cut off");
  }
}

class Mouse {
  checkPower() {
    console.log("Mouse cheking power");
  }
  launchLight() {
    console.log("Turning on backlight");
  }
  noPower() {
    console.log("Mouse unpowered");
  }
}

class Keyboard {
  checkPower() {
    console.log("Keyboard cheking power");
  }
  noPower() {
    console.log("Keyboard unpowered");
  }
}

class ComputerFacade {
  constructor(computer, mouse, keyboard) {
    this.computer = computer;
    this.mouse = mouse;
    this.keyboard = keyboard;
  }

  turnOn() {
    this.computer.getPower();
    this.computer.startBios();
    this.computer.showLoadingScreen();
    this.mouse.checkPower();
    this.mouse.launchLight();
    this.keyboard.checkPower();
    this.computer.ready();
  }

  turnOff() {
    console.log("Computer is about to shutdown");
    this.computer.closeEverything();
    this.computer.sooth();
    this.computer.cutOffPower();
    this.mouse.noPower();
    this.keyboard.noPower();
  }
}

const computer = new ComputerFacade(
  new Computer(),
  new Mouse(),
  new Keyboard()
);

computer.turnOn();
console.log("\n");
computer.turnOff();
