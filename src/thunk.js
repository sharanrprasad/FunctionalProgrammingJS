//thunk is a function without any arguments. Arguments are hard coded
//
function addAsync (x,y,cb) {
    setTimeout(cb(x+y),1000);
}

//doesnot take any arguments except the callback
let thunk = (cb) => {
     addAsync(2,3,cb)
}

//it is called as follows
thunk((num) => {console.log(num);})



//like a constructor for thunks (Not understood yet)
function makeThunk(fn) {
    var args = [].slice.call(arguments,1); //slice without argumetns returns a new copy of the array
    return function(cb) {
        //closure used here
        args.push(cb);
        fn.apply(null,args);
    }
//arguments is a local variable avilable inside a function but it is not exaclty an array
}

var addThunk = makeThunk(addAsync,2,3);
addThunk((num) => console.log(num));
