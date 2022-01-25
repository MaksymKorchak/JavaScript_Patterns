'use strict';

class EngineV8 {
    simpleInterface() {
        console.log('Engine V-8');
    }
};

class EngineV12 {
    complecatedInterface() {
        console.log('Engine V-12');
    }
};

class EngineV12Adapter {
    constructor(engine) {
        this.engine = engine;
    }
    simpleInterface() {
        this.engine.complecatedInterface();
    }
}

class Auto {
	startEngine(engine) {
		engine.simpleInterface()
	}
}

//Engine V8
const myCar = new Auto();
const oldEngine = new EngineV8();
console.log(myCar.startEngine(oldEngine));

//Engine V12 with adapter
const myCar1 = new Auto();
const engineAdapter1 = new EngineV12Adapter(new EngineV12());
console.log(myCar1.startEngine(engineAdapter1));

//Engine V12 without adapter
const myCar2 = new Auto();
const engineAdapter2 = new EngineV12();
console.log(myCar2.startEngine(engineAdapter2));  //'Error'