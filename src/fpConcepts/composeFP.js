const R = require("ramda");

//this is a great function to debug when using multiple functions in a compose
const trace = R.curry((tag, arg) => {
  console.log(`${tag} ${arg}`);
  return arg;
});

const addSquare = R.compose(
  x => x * x,
  trace("After Addtion"),
  y => y + y
);
addSquare(5);
