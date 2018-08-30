class Shopper {

    constructor(name) {
        this.name = name;
    }


    //All the subscribers must implement the notify method
    notify(storeName, discount) {
        console.log(`${this.name}, there is a sale at ${storeName}! ${discount}% off everything!`);
    }
}

module.exports = Shopper;
