'use strict';

class Iterator {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el);
        this.elements = el;
    }
    next() {
        return this.elements[this.keys[this.index++]];
    }
    hasNext() {
        return this.index < this.keys.length;
    }
};

const autos = {
    audi: { model: 'Audi', color: 'red' },
    bmw: { model: 'Bmw', color: 'black' },
    tesla: { model: 'Tesla', color: 'white' }
};

const collection = new Iterator(autos);

while (collection.hasNext()) {
    console.log(collection.next());
};