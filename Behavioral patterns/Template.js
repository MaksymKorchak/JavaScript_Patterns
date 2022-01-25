'use strict';

class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
};

class AudiBuilder extends Builder {
    addEngine(){
        console.log('add Audi engine');
    }
    installChassis(){
        console.log('Install Audi chassis');
    }
    addElectronic(){
        console.log('Add Audi special electronic');
    }
    collectAccessories(){
        console.log('Collect Accessories');
    }
};

class BmwBuilder extends Builder {
    addEngine(){
        console.log('add BMW engine');
    }
    installChassis(){
        console.log('Install BMW chassis');
    }
    addElectronic(){
        console.log('Add BMW special electronic');
    }
    collectAccessories(){
        console.log('Collect Accessories');
    }
};

const audiBuilder = new AudiBuilder();
const bmwBuilder = new BmwBuilder();

console.log(audiBuilder.build());
console.log(bmwBuilder.build());
