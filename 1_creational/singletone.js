// Singletone first sample (Database)

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mysql = new Database("MySQL");
console.log(mysql.getData()); // MySQL

const mongo = new Database("MongoDB");
console.log(mongo.getData()); // MySQL

const db2 = new Database("DB2e");
console.log(db2.getData()); // MySQL

// Singletone another sample (Counter)d

class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount()); // 4
console.log(myCount2.getCount()); // 4
