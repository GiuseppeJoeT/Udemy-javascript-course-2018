///////////////////////////////////////
// Lecture: Hoisting

// functions

// So this is Hoisting.
// So in the creation phase of the execution context,
// which is, in this case, the global execution context.
// The function declaration calculateAge is stored
// in the variable object and even before the code is executed.
calculateAge(2016);

// FUNCTION DECLARATION
function calculateAge(year) {
    console.log('My age is: ' + (2018 - year));
}

// retirement is not a function so far
// because we use a FUNCTION EXPRESSION to declare it
// HOISTING WORKS JUST with the Function Declaration
// retirement(1986); // -> console error 

// FUNCTION EXPRESSION
var retirement = function(year) {
    console.log("I'll retire at" + 65 - (2018 - year) + " years old");
};


// variables 
console.log(age); // undefined

// this variable get stored in the 
// Global Execution Context Object
var age = 31;
console.log(age);

function foo() {
    console.log(age); // undefined

    // this variable has its own 
    // Execution Context Object
    var age = 65;
    console.log(age);
}

foo(); // 65 - LOCAL VARIABLE 
console.log(age); // 31 - GLOBAL VARIABLE


