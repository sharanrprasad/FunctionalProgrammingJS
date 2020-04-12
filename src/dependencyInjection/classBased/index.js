// Dependency injection is a form on inversion of control.
// The main use case I found is initializing the third party services like db or api which needs a client object in each function.
// This can be achieved in multiple ways. Example -1 Using the classes. Example -2 Using Modules. Both the approaches are functional in nature.

const User = require('./User');
const Booking = require('./Booking');

// Inject the dependency into all the objects here and export and use this object else where.
const apiServiceFactory = (client) => {
  return {
    user: new User(client),
    bookings: new Booking(client)
  }
};

module.exports = apiServiceFactory;


