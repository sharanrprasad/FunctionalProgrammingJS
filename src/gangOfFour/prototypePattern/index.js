//instead of creating multiple Shopper class objects which have the same shopping list create one object that has all the list
// use full  when everything cannot be put in a constructor

let scoutPrototype = require("./scout_prototype");

let alex = scoutPrototype.clone(); // implement clone method for each object;
alex.name = "Alex";
alex.addItemToList("Wilson Blade");

let eve = scoutPrototype.clone();
eve.name = "Eve";
eve.addItemToList("Prince Pro 100");

console.log(`${alex.name} : ${alex.shoppingList}`);
console.log(`${eve.name} : ${eve.shoppingList}`);
