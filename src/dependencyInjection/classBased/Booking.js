// Create a class for each sub module with in the third party service.
// Say if this was a API then one class each for User, Bookings, Tickets etc.
class Booking {
  constructor(client) {
    this.client = client;
  }

  getUser = async (name) => {
    return this.client.get(name);
  }

  setUser = async (name) => {
    return this.client.get(name);
  }
};


module.exports = Booking;