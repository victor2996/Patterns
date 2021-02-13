class AppleDealer {
  constructor() {
    this.customers = [];
  }

  orderDevice(customer, device, info) {
    const name = customer.getName();

    console.log(`Order name: ${name}. Order device is ${device}`);
    console.log(`Additional info: ${info}.`);
    this.addToCustomerList(name);
  }

  addToCustomerList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(device, info) {
    this.dealerMediator.orderDevice(this, device, info);
  }
}

const mediator = new AppleDealer();

const john = new Customer("John", mediator);
john.makeOrder("MacBook", "model Pro 2020, with processor M1");

const mark = new Customer("Mark", mediator);
mark.makeOrder("iPhone", "model SE 2020, with processor A13 Bionic");

const helen = new Customer("Helen", mediator);
helen.makeOrder("iPad", "model Air 2020, with processor A14");

console.log(mediator.getCustomerList());
