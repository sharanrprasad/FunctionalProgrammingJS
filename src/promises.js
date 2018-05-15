//Important Promises characterstics
//Promises resolve only once
//either success or error
//message pass/kept
//exceptions become errors
//immutable once resolved


function getData(num) {
    return new Promise(function(resolve,reject){
        if(num % 2 != 0){
        setTimeout(resolve(num),1000);
        }else{
            reject("some error");
        }

    })
}

//chaining Promises
//each then returns a new promise (functional programming style). The returned promise can be overide with the return of then function
getData(10).then(output,output). //error shown here and then in catch
then((num) => {return getData(40)}).then(x => console.log(x)).catch(err => console.log(err)); //catch also returns a promise

//Excerise
function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
    return new Promise((resolve,reject) => {
            fakeAjax(file,resolve);

    })
}

var p1 =getFile("file1");  //no matter how many times you call p1.then it is resolved only once
var p2 = getFile("file2");
var p3 = getFile("file3");

p1.then(output).        // a new promise copy of p1 is returned which is already resolved or rejected. 
then((num) => {return p2}) // now the promise returned is p2
.then(output)
.then((num) => {return p3}).
then(output).catch(err => console.log(err)); //if a promise is rejected at the begining all the returned promises are rejected.

//few extras
Promise.all(getFile("file1"),getFile("file2")).then();