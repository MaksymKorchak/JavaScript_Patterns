'use strict';

class Car {
    constructor() {
        this.autopilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
};

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(autopilot) {
        this.car.autopilot = autopilot;
        return this;
    }

    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }

    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

const myCar = new CarBuilder().addAutoPilot(true).addParktronic(true).updateEngine('V12').build();

const oneMoreNewCar = new CarBuilder().addSignaling(true).updateEngine('V8').build();

console.log(myCar);
console.log(oneMoreNewCar);