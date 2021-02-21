class LabDoor {
  open() {
    console.log("Opening lab door");
  }

  close() {
    console.log("Closing the lab door");
  }
}
class Security {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Impossible! Incorrect password.");
    }
  }

  authenticate(password) {
    return password === "password";
  }

  close() {
    this.door.close();
  }
}
const door = new Security(new LabDoor());
door.open("invalid"); // Impossible! Incorrect password.

door.open("password"); // Opening lab door
door.close(); // Closing lab door
