'use strict';

class Audi {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
};

class AudiFactory {
    create(type) {
        switch (type) {
            case 'Q7':
                return new Audi(type, 30000, 220)
                break;
            case 'Q8':
                return new Audi(type, 50000, 300)
                break;
        }
    }
};

const factory = new AudiFactory();

const Q7 = factory.create('Q7');
const Q8 = factory.create('Q8');


console.log(Q7);
console.log(Q8);