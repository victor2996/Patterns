class Computer {
  start() {
    console.log("Computer (receiver): start!");
  }
  stop() {
    console.log("Computer (receiver): stop!");
  }
  reset() {
    console.log("Computer (receiver): reset!");
  }
}

class Invoker {
  SetCommand(...command) {
    this.commands = command;
  }
  Execute() {
    for (let command of this.commands) {
      command();
    }
  }
}

let invoker = new Invoker();
let receiver = new Computer();

invoker.SetCommand(receiver.start);
invoker.Execute();
invoker.SetCommand(receiver.stop);
invoker.Execute();

invoker.SetCommand(receiver.start, receiver.stop, receiver.reset);
invoker.Execute();
