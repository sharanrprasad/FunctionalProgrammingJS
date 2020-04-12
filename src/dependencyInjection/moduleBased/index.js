const R = require('ramda');
const user = require('./user');
const booking = require('./booking');

// This can also be done by just currying each function here.
const apiServiceFactory = client => {
 return {
   user: R.applySpec(user)(client), // This gives { getUser, setUser} but only the inner functions are returned. The client is available via closure.
   bookings: R.applySpec(booking)(client)
 }
};

const getClient = () => ({
  get: () => '',
  set: () => ''
});


module.exports = {
  getClient,
  apiServiceFactory
}