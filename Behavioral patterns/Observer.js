'use strict';

class AutoNews {
    constructor() {
        this.news = '';
        this.actions = [];
    }
    setNews(text) {
        this.news = text;
        this.notifyAll();
    }
    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this));
    }
    register(observer) {
        this.actions.push(observer);
    }
    unregister(observer) {
        this, actions = this.actions.filter(el => !(el instanceof observer));
    }
};

class Alonso {
    inform(message) {
        console.log(`Alonso has been informed about: ${message.news}`);
    }
};

class Andrea {
    inform(message) {
        console.log(`Andrea has been informed about: ${message.news}`);
    }
};

const autoNews = new AutoNews();

autoNews.register(new Alonso());
autoNews.register(new Andrea());

autoNews.setNews('New Tesla price is 70 000$');