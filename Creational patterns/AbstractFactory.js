'use strict';

//Abstract factory
function bmvProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
};

//Factories
function sportCarFactory() {
    return new Z4();
};

function familyCarFactory() {
    return new I3();
};

class Z4 {
    info() {
        return "Z4 is a Sport car!"
    }
};

class I3 {
    info() {
        return "i3 is a family car!"
    }
};


//Initializing Abstract factory of sport cars
const produce = bmvProducer('sport');

//Car producing (Factory)
const myCar = new produce();

console.log(myCar.info());


