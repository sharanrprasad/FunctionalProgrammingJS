// Is use full when something needs to be added on already built model.
// Even in other languages decorators use composition instead of inheritance
// So do not worry about using virtual methods in c#

var {
  InventoryItem,
    GoldenInventoryItem,
  DiamondInventoryItem
} = require('./InventoryItem');

var Shopper = require("./Shopper");

let necklace = new InventoryItem("Neklace", 30);

let golden_necklace =  new GoldenInventoryItem(necklace);// using the decorator here that builds on necklace

let diamond_necklace = new DiamondInventoryItem(golden_necklace);

let alex = new Shopper("Alex", 1000);
alex.purchase(diamond_necklace);
