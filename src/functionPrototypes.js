// This file explores the use of functions, prototype and constrcutors.

// Remember in JS - Functions are objects.

function FuncIsObject () {
    return "something"
}

// Now we can add attributes to this function.
FuncIsObject.type = "sometype";
FuncIsObject.toString = () => {
    return "some string";
};

// This is super user ful when we want to return functions but also have some attributes attached. Example redux dev kit createAction method.

// Using Functions as classes. With the help of prototype.

// This is called the constuctor function. If we console.log(FuncProto) we see that { constructor: FunProto }. constructor points to it's own function.
function FuncProto(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// All the objects created with new keyword will have this object as _proto_ in them.
FuncProto.prototype.getFullName = function() {
    return this.firstName + this.lastName;
}


const human1 = new FuncProto("sharan", "prasad");
console.log(human1.getFullName());

// All the objects will have the same object as __proto__. So modifying either the prototype in function or __proto__ in any object will modify all the instances. Below is a example.
human1.__proto__.type= "sometype";
const human2 = new FuncProto("s", "p");
console.log(human2.type); // sometype;
// The above thing can also be achieved using FuncProto.prototype.type= "sometype";
