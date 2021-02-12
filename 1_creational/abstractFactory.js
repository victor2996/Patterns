class DryCargo {
  constructor() {
    this.cargo = "containers";
  }
  getInfo() {
    return this.info;
  }
}

class BulkCargo {
  constructor() {
    this.cargo = "coal";
  }
  getInfo() {
    return this.info;
  }
}

class ShipTransferDryCargo extends DryCargo {
  constructor() {
    super();
    this.info = "The ship delivers dry cargo";
  }
}

class ShipTransferBulkCargo extends BulkCargo {
  constructor() {
    super();
    this.info = "The ship delivers bulk cargo";
  }
}

class TruckTransferDryCargo extends DryCargo {
  constructor() {
    super();
    this.info = "The truck delivers dry cargo";
  }
}

class TruckTransferBulkCargo extends BulkCargo {
  constructor() {
    super();
    this.info = "The truck delivers bulk cargo";
  }
}

class TransferFactory {
  createDryCargo() {}
  createBulkCargo() {}
}

class ShipTransferFactory extends TransferFactory {
  createDryCargo() {
    return new ShipTransferDryCargo();
  }
  createBulkCargo() {
    return new ShipTransferBulkCargo();
  }
}

class TruckTransferFactory extends TransferFactory {
  createDryCargo() {
    return new TruckTransferDryCargo();
  }
  createBulkCargo() {
    return new TruckTransferBulkCargo();
  }
}

// let transferFactory = new ShipTransferFactory();
let transferFactory = new TruckTransferFactory();

let dryCargo = transferFactory.createDryCargo();
let bulkCargo = transferFactory.createBulkCargo();

console.log(`${dryCargo.getInfo()} : ${dryCargo.cargo}`);
console.log(`${bulkCargo.getInfo()} : ${bulkCargo.cargo}`);
