class Shopper {

  constructor(name='unnamed person') {
    this._name = name;
    this._shoppingList = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList.join(', ');
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }

  // this is important. Object.assign() will not work as it only copies enumerables(for example name and shopping list here)
  // Object.getPrototypeof() returns the __proto__ of an object. This contains the object's instance from which it is inherited or if no inheritance then the original Object properties.
  // It contains all the functions of that object
  //Object.assign only copies the properties not functions;

  clone(){
    let proto = Object.getPrototypeOf(this);
    let cloned = Object.create(proto);
    return Object.assign(cloned,this);
  }

}

module.exports = Shopper;



