// So a big difference between PRIMITIVES and OBJECTS
// is that variables containing PRIMITIVES
// actually hold that data inside of the variable itself.

// On OBJECTS it's very different.
// Variables associated with objects
// do not actually contain the object,
// but instead they contain a reference to the place in memory
// where the object sits, so where the object is stored.

// Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
// 46
console.log(b);
// 23


// Objects 
var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
// 30
console.log(obj2.age);
// 30


// Functions 
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

// function call
change(age, obj);

console.log(age);
// 27
console.log(obj.city);
// San Francisco