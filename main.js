var Vehicle = /** @class */ (function () {
    function Vehicle(type, id, status) {
        this.type = type;
        this.id = id;
        this.status = status;
    }
    Vehicle.prototype.assignUser = function (user) {
        if (this.status === "available") {
            console.log("".concat(user.name, " ").concat(user.surname, " reserved ").concat(this.type, " ID: ").concat(this.id));
            this.status = "in use";
        }
        else {
            console.log("".concat(this.type, " ").concat(this.id, " not available"));
        }
    };
    return Vehicle;
}());
var User = /** @class */ (function () {
    function User(name, surname, email, payment) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.payment = payment;
    }
    User.prototype.reserveVehicle = function (vehicle) {
        vehicle.assignUser(this);
    };
    return User;
}());
var City = /** @class */ (function () {
    function City(name, availableVehicle) {
        this.name = name;
        this.availableVehicles = availableVehicle;
    }
    City.prototype.addVehicle = function (vehicle) {
        this.availableVehicles.push(vehicle);
        console.log("The ".concat(vehicle.type, " ").concat(vehicle.id, " has been added to ").concat(this.name));
    };
    return City;
}());
var bike = new Vehicle("bike", 1, "available");
var scooter = new Vehicle("scooter", 2, "available");
var moped = new Vehicle("moped", 3, "available");
var user1 = new User("Pippo", "Farselli", "pippofarselli@gmail.com", "debit card");
var user2 = new User("Francesco", "Biancardo", "frankwhite@gmail.com", "bank account");
var caserta = new City("Caserta", [bike, moped]);
caserta.addVehicle(scooter);
user1.reserveVehicle(bike);
user2.reserveVehicle(bike);
user2.reserveVehicle(moped);
