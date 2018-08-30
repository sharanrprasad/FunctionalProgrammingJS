//making an exact copy of already available API
// already present local storage browser API. Implement the same in node.js
var localStorage = require('./LocalStorage');

console.log( "localStorage length: ", localStorage.length );

var uid = localStorage.getItem("user_id");

console.log( "user_id: ", uid );

if (!uid) {
  console.log('User ID not found. Setting the user id and token...');
  localStorage.setItem("token", "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
  localStorage.setItem("user_id", "12345");
} else {
  console.log('User ID found.', uid);
  console.log('clearning the User ID...');
  localStorage.clear();
}