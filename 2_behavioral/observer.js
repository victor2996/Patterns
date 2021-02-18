class Publisher {
  constructor() {
    this.observersList = [];
    this.state = [];
  }

  subscribe(observer) {
    return this.observersList.push(observer);
  }
  unsubscribe(observer) {
    this.observersList = this.observersList.filter((item) => item !== observer);
    return this.observersList;
  }

  notifyObservers() {
    this.observersList.forEach((observer) => {
      observer.update(this.state);
    });
  }

  setState(...args) {
    this.state = [...args];
  }
  getState() {
    this.state.forEach((arg) => {
      console.log(arg);
    });
  }
}

class Observer {
  constructor(publisher, observerName = "Observer") {
    publisher.subscribe(this);
    this.observerName = observerName;
  }
  update(...args) {
    [...args].forEach((arg) => {
      console.log(`${this.observerName}: ${arg}`);
    });
  }
}

const subject = new Publisher();
const observer = new Observer(subject);
const observer2 = new Observer(subject, "John");
const observer3 = new Observer(subject, "Mark");

subject.setState("Here some news for you");
subject.notifyObservers();
subject.unsubscribe(observer);
subject.unsubscribe(observer2);
subject.getState();
subject.setState("news about phones", "news about laptops");
subject.getState();
subject.notifyObservers();
