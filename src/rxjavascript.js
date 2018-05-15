var Rx = require('rxjs');


// let btn;//null can be a btn in real
// var obs = Rx.Observable.fromEvent(btn,"Click");
// obs.map((event , i) => {return event.classname}).distinctUntilChanged().subscribe(val => {console.log(val)});


//subject are both observables and observers
var subject = new Rx.Subject();
subject.subscribe(x => console.log(x));
subject.next(1);
subject.next(2); //second subscriber never gets this and 1. If we want second subject to get all this use behaviour subjects
subject.subscribe(x => console.log("second subscribe " +x  )); //from here on both the subscribers get the result
subject.next(22); 

//once complete is called all others are ignored
subject.complete();
subject.next(33);


//Always unsubscribe for subjects
subject.unsubscribe();