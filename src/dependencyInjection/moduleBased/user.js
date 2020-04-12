const getUser = client => name => client.get(name);
const setUser = client => name => client.set(name);

module.exports = {
  getUser,
  setUser
}