interface IVehicle {
  type:"bike" | "scooter" | "moped";
  id:number;
  status:"available" | "in use";
  assignUser(user: IUser): void;
}

interface IUser {
  name: string;
  surname: string;
  email: string;
  payment: string;
  reserveVehicle(vehicle: IVehicle):void;
}

interface ICity {
  name:string;
  availableVehicles: IVehicle[];
  addVehicle(vehicle: IVehicle): void;
}

class Vehicle implements IVehicle {
  type:"bike" | "scooter" | "moped";
  id:number;
  status: "available" | "in use";
  
  constructor(type:"bike" | "scooter" | "moped", id:number, status:"available" | "in use") {
    this.type = type;
    this.id = id;
    this.status = status;
  }

  assignUser(user: IUser): void {
    if (this.status === "available") {
      console.log(`${user.name} ${user.surname} reserved ${this.type} ID: ${this.id}`);
      this.status = "in use";  
    } else {
      console.log(`${this.type} ${this.id} not available`)
    }
  }
}

class User implements IUser {
  name: string;
  surname: string;
  email: string;
  payment: string;
  constructor(  name: string, surname: string, email: string, payment: string) {
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.payment = payment;    
  }

 reserveVehicle(vehicle: IVehicle): void {
  vehicle.assignUser(this);
 }
}

class City implements ICity {
  name:string;
  availableVehicles: IVehicle[];
  constructor(name:string, availableVehicle: IVehicle[]) {
    this.name = name;
    this.availableVehicles = availableVehicle;
  }

  addVehicle(vehicle: IVehicle): void {
    this.availableVehicles.push(vehicle);
    console.log(`The ${vehicle.type} ${vehicle.id} has been added to ${this.name}`);
  }
  
}

const bike = new Vehicle("bike", 1, "available");
const scooter = new Vehicle("scooter", 2, "available");
const moped = new Vehicle("moped", 3, "available");

const user1 = new User("Pippo", "Farselli", "pippofarselli@gmail.com", "debit card");
const user2 = new User("Francesco", "Biancardo", "frankwhite@gmail.com", "bank account");

const caserta = new City("Caserta", [bike, moped]);

caserta.addVehicle(scooter);

user1.reserveVehicle(bike);
user2.reserveVehicle(bike);
user2.reserveVehicle(moped);