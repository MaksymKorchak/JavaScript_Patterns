'use strict';

class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.counter++;
    }

    decreaseCount() {
        return this.counter--;
    }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount2.increaseCount();

myCount1.decreaseCount();
myCount2.decreaseCount();
myCount2.decreaseCount();

console.log(myCount1.getCount());
console.log(myCount2.getCount());

console.log((myCount1 === myCount2));

