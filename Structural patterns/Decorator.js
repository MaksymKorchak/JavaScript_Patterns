'use strict';

class Car {
    constructor() {
        this.price = 7000;
        this.model = 'Car';
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.model;
    }
}

class Audi extends Car {
    constructor() {
        super();
        this.price = 30000;
        this.model = 'Audi';
    }
}

class Bmw extends Car {
    constructor() {
        super();
        this.price = 30000;
        this.model = 'Bmw';
    }
}

class Autopilot {
    constructor(car) {
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 10000;
    }
    getDescription() {
        return `${this.car.getDescription()} with autopilot`;
    }
};

class Parktronic {
    constructor(car) {
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 7000;
    }
    getDescription() {
        return `${this.car.getDescription()} with parktronic`;
    }
};


//Version with Autopilot & Parktronic
let audi = new Audi();
audi = new Autopilot(audi);
audi = new Parktronic(audi);

console.log(audi.getPrice(), audi.getDescription());


let bmw = new Bmw();
bmw = new Autopilot(bmw);

console.log(bmw.getPrice(), bmw.getDescription());

