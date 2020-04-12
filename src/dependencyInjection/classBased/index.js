// Dependency injection is a form on inversion of control.
// The main use case I found is initializing the third party services interaction like db needs a client object and this object can be dependency injected.

const User = require('./User');
const Booking = require('./Booking');

// This can be achieved in multiple ways. Example -1 Using the classes.
// Inject the dependency into all the objects here and export and use this object else where.
const apiServiceFactory = (client) => {
  return {
    user: new User(client),
    bookings: new Booking(client)
  }
};

module.exports = apiServiceFactory;


