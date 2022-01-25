'use strict';

class CarAccess {
    open() {
        console.log('Opening car door');
    }
    close() {
        console.log('Closing the car door');
    }
};

class SucuritySystem {
    constructor(door) {
        this.door = door;
    }
    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied!');
        }
    }

    authenticate(password) {
        return password === 'QWERT'
    }

    close() {
        this.door.close();
    }
};


const door = new SucuritySystem(new CarAccess());
console.log(door.open('ASDF')); //'Access denied!'
console.log(door.open('QWERT')); //'Opening car door'
console.log(door.close()); //'Closing the car door'