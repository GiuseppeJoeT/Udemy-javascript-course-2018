
///////////////////////////////////////
// Lecture: The this keyword

// console.log(this); Window object


// Regular function call
// calculateAge(1986);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this); // Window object
}



// Method Call
// the THIS variable points to the object that is calling the method
var joe = {
    name: 'Joe',
    yearOfBirth: 1986,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);

        function innerFunction() {
            console.log(this); // Window object
            // This function here, although it's written inside of a method,
            // it's still a regular function. So when we call it the This Keyword
            // will no longer point to the John object, but instead point to the window object.
        }
        // innerFunction();
    } // closing the calculateAge() method
};

joe.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method Borrowing
mike.calculateAge = joe.calculateAge;
mike.calculateAge();