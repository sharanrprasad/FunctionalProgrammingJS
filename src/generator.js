function* gen() {
    console.log("Hello");
    yield;
    console.log("World");
} //generator returns a iterator

var it = gen();
it.next();
it.next();


function* setGetNumbers() {
    let ins = -1;
    let  input = yield ins ;
    console.log("input - ", input);
    yield input;
    console.log("input - ", input);

}


//calling next() executes the function till the first yield statement.
const setThoseNumbers = setGetNumbers();
console.log(setThoseNumbers.next(1));
console.log(setThoseNumbers.next(2));
// The curious case of passing data through next -
// First yield returns its value and then if a argument is passed in coming function next() that will be returned in yield statement
// But the first value passed in next is ignored as it is used to start the genertor which is nothing but get to the first yield statement. So 1 passed in above is basically lost and input is assigned 2
let returnObject = setThoseNumbers.next(); //this completes the generator
console.log(returnObject.value);


//promises with generators (not so useful) - use async await instead of this as it is the new way.
function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        users: [{id: 1, title: 'test'}]
      })
    }, 1000)
  })
}
function* getData() {
  const data = yield fetchUsers()
  yield data
}

const getter = getData();
console.log(getter.next()); // gets a pending promise as the return

