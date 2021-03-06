var lodash = require("lodash");
var rx = require('rxjs');
const line = console.log;

//clousure
//count value is now accessable by both the functions
function counter(count) {
  return {
    increamentCounter : () => { count = count + 1},
    getvalue : () => { return count}
  }
}
// A very oo way of doing it

let counterStartingAt5 = counter(5);

let counterStartingAtMinus2 = counter(-2);


// Higher order functions - Takes a function as argument and returns a function as arguements
let arr= [1,2,3,4,5];
//map function is a great example

//let newArr = arr.map(num => num * num);

let newArr =  lodash.map(arr,num => num * num);
line(newArr);


function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let date = new Date(userDate);
  let year = date.getFullYear().toString();
  let month = date.getMonth().toString();
  if(month.length === 1){
    month = "0"+month;
  }

  let day = date.getDay().toString();
  return year + month + day
}

"a".toLowerCase()

console.log(formatDate("12/31/2014"));
