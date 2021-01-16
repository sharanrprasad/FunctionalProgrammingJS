const R = require("ramda");

// say this function checks the dom for an element using jquery. That checking the elements can be passed as the arguments to this function
function processMovieDetails(isElementPresent, removeElement) {}

function checkDomElement() {
  //check for a element here
}

function removeDomElement() {}

//pass the function as a  parameter - Higher order function as it receives other functions as arguments
processMovieDetails(checkDomElement, removeDomElement);

//Data must be the last object to be passed in a curried function
//If and else in Ramda

const ifNotEmpty = R.compose(
  R.not,
  R.isEmpty
);

//if the first function return true then 2nd or else 3rd arg
const searchifNotEmpty = R.ifElse(isNotEmpty, () => {}, console.log);

//returns whatever the input is supplied and executes the passed function
const tap = R.tap(() => {
  console.log("inside tap");
});

//when - Map is called only when the first function predicate returns true
R.when(() => 1 === 1, R.map([1, 2, 3], () => {}));

//validating data

const validator1 = () => {};
const validateEmail = R.ifElse(R.allPass[(validator1, validator1)]);
