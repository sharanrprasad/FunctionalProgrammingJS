const R = require("ramda");

class IO {
  static of(x) {
    //holds the value in a function
    return new IO(() => x);
  }

  constructor(fn) {
    this.$value = fn;
  }

  //IO accumulates the function or delays the execution. At the end when runIo function is called  the
  map(fn) {
    return new IO(
      R.compose(
        fn,
        this.$value
      )
    );
  }
}

const address = IO.of({ location: "Rajajinagar" });
const locationUpper = R.compose(
  R.map(val => val.toUpperCase()),
  R.map(val => val.location)
);

//Or call the runIO method. here the main value present in the string is given back
console.log(locationTwice(address).$value());

//Convert an IO of Maybe to a Maybe
