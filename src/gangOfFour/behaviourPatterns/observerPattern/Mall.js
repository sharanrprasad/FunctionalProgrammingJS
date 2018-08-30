class Mall {

    constructor() {
        this.sales = [];
    }

    //same here
    notify(storeName, discount) {
        this.sales.push({ storeName, discount });
    }

}

module.exports = Mall;
