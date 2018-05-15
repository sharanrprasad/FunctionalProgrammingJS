function* gen() {
    console.log("Hello");
    yield;
    console.log("World");
} //generator returns a iterator

var it = gen();
it.next();
it.next();