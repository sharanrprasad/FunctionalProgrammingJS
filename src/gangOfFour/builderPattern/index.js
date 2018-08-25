//used to create multiple type of objects of the same
//can use chain functions
var PersonBuilder = require('./PersonBuilder');

let sue = new PersonBuilder('Sue').makeEmployee().makeManager(20).build();
console.log(sue.toString());


