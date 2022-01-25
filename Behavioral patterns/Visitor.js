'use strict';

class Auto {
    accept(visitor) {
        visitor(this);
    }
}

class Audi extends Auto {
    info() {
        return 'It is Audi car';
    }
};

class Bmw extends Auto {
    info() {
        return 'It is BMW car';
    }
};

function exportVisitor(auto) {
    if (auto instanceof Audi) {
        auto.export = console.log(`Exported data: ${auto.info()}`);
    }
    if (auto instanceof Bmw) {
        auto.export = console.log(`Exported data: ${auto.info()}`);
    }
};

const audi = new Audi();
const bmw = new Bmw();

console.log(audi.accept(exportVisitor));
console.log(bmw.accept(exportVisitor));