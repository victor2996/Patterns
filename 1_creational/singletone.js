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
console.log(mysql.getData());

const mongo = new Database("MongoDB");
console.log(mongo.getData());

const db2 = new Database("DB2");
console.log(db2.getData());
