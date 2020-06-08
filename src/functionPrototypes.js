// This file explores the use of functions, prototype and constrcutors.

// Remember in JS - Functions are objects.

function FuncIsObject () {
    return "something";
}
// Now we can add properties and methods to this function. Accesing 
FuncIsObject.type = "sometype";
FuncIsObject.toString = () => {
    return "some string";
};


// This is super user ful when we want to return functions but also have some attributes attached. Example redux dev kit createAction method/ prop-types.
// The same principle applies to arrow functions as well. Remember arrow functions do not have any this defined nor have any prototype defined or have any arguments binding.
const arrowFuncObject = () => {
    const functionPropertyType =  arguments.callee.type; // since the arrow functions do not have arguments this will be undefined.
    return "something arrow" +  functionPropertyType ;
}
arrowFuncObject.type = "sometype-arrow";


// Using Functions as classes. With the help of prototype.
// This is called the constuctor function. If we console.log(FuncProto) we see that { constructor: FunProto }. constructor points to it's own function.
function FuncProto(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// All the objects created with new keyword will have the prototype object as _proto_ in them and a new instance of this object which is different from the one just the function has.
// __proto__ is how inhertiance works in javascript. First it checks for properties in that object and then looks in proto
// Also when created with new keyword each function gets it's own this context.
FuncProto.prototype.getFullName = function() {
    return this.firstName + this.lastName;
}


const human1 = new FuncProto("sharan", "prasad");
console.log(human1.getFullName(), human1.firstName, human1.lastName);

// All the objects will have the same object as __proto__. So modifying either the prototype in function or __proto__ in any object will modify all the instances. Below is a example.
human1.__proto__.type= "sometype";
const human2 = new FuncProto("s", "p");
console.log(human2.type); // sometype;
// The above thing can also be achieved using FuncProto.prototype.type= "sometype";
