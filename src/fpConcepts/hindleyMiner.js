//hindley Miner is the flow/Typescript of Fp. It is just a syntax to define the types of function arguments in the comments

const R = require("ramda");

//join :: string -> [string] -> [string]
const join = R.curry((what, arr) => arr.join(what));
