//There is a very subtle difference between currying and partial application. Currying actually returns a function.
const R = require("ramda");

const display = R.curry((x, y, z) => console.log(x, y, z));
const displayXY = display(R.__, "x", "y");
displayXY("X");
