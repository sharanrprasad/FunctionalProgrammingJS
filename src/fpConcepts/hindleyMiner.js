//hindley Miner is the flow/Typescript of Fp. It is just a syntax to define the types of function arguments in the comments

const R = require("ramda");

//join :: string -> [string] -> [string]
const join = R.curry((what, arr) => arr.join(what));

//if a series of -> is there then it is a curried function;

//The  add function below is represented as Number -> Number -> Number -> Number;
const add = R.curry((x, y, z) => x + y + z);

//Generic Types
// a -> Box a -> Box a
const addItem = R.curry((item, box) => {
  return box;
});
//The above function takes a argument of type a and a generic object of type a as well and returns a box object generic type of a;
// Dictionary K V  can also be used to specify multiple types.

//Constraint section
//Double Arrow before the function type can be used to specify the constraint

// map :: Functor f => (a -> b) -> f a -> f b   constraint here is f must be  a functor
const map = R.curry((fn, functor) => functor.map(fn));


//Multiple Signatures
