// Three major functors are Maybe Either and IO.
class Maybe {
  static of(val) {
    return new Maybe(val);
  }
  constructor(val) {
    this.$value = val;
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  map(fn) {
    return this.isNothing ? this : Maybe(fn(this.$value));
  }
}


