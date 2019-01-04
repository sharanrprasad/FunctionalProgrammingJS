// closure are kind of thunks. Thunks can be closure but not all closure are thunks
// Thunks are async.

function makeAdder(x) {

  return function add(y) {
    return x +y;
  }
}
