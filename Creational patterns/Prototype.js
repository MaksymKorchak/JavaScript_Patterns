'use strict';

class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
}


//Produce base auto
const prototypeCar = new TeslaCar('S', 70000, 'white', false);

//Cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

//Changes for particular auto
car1.interior = "red";
car1.autopilot = true;

console.log(car1);
console.log(car2);
console.log(car3);



