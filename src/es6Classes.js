//extending more than one class. Do not use in React. IT is frowned upon

let mixin = {
  madeIn(){
    console.log("This car was made in year 2018");
  }
}

let carMixin = {
  // An object's proto is the object from which it is inheriting properties
  __proto__: mixin,
  madeIn(){
    super.madeIn();
  }
}



class Vehicle {
  constructor(){
    this.name = "Vehicle";
  }

  getName(){
    return this.name;
  }
}

class Suv extends  Vehicle{
    constructor(name){
      super(name);
      this.suvName = "SuV";
      //this is not inheritance. It is composition
      Object.assign(this,carMixin);
    }

    getName(){
      return this.suvName;
      // super.getName();
    }
}

let obj = new Suv();
console.log(obj.getName());
console.log(obj.madeIn());










