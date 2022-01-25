'use strict';

class OfficialDiller {
    constructor() {
        this.customers = [];
    }
    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional infor: ${info}`);
        this.addToCustomersList(name);
    }
    addToCustomersList(name) {
        this.customers.push(name);
    }
    getCustomersList() {
        return this.customers;
    }
};

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }
    getName() {
        return this.name;
    }
    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
};

const mediator = new OfficialDiller();

const customer1 = new Customer('customer1', mediator);
const customer2 = new Customer('customer2', mediator);

customer1.makeOrder('BMW', "With V12");
customer2.makeOrder('Audi', "With V8");

console.log(mediator.getCustomersList());

