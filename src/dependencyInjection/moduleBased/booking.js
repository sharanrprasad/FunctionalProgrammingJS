const getBooking = client => name => client.get(name);
const setBooking = client => name => client.set(name);

module.exports = {
  getBooking,
  setBooking
}