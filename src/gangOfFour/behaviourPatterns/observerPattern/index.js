// observer has two parts
// 1. Observable - which on any of its state change notifies its subscribers
// 2. Observers = which subscribes to observable state changes


//Here Mall and shopper subscribe to Store for sale.

var Store = require('./Store');
var Shopper = require('./Shopper');
var Mall = require('./Mall');

var catsAndThings = new Store("Cats & Things");
var insAndOuts = new Store("Ins and Outs");

var alex = new Shopper("Alex");
var eve = new Shopper("Eve");
var sharon = new Shopper("Sharon");
var mike = new Shopper("Mike");

var valleyMall = new Mall();

catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);


// Notify all the subscribers on sale
catsAndThings.sale(20);
insAndOuts.sale(50);

console.log( valleyMall.sales );

