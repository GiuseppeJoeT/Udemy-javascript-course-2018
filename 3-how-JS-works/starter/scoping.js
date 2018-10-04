///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first(); // Hello!Hi!Hey!

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    // console.log(a + b + c + d); // ReferenceError: b is not defined because of the Scope chain
    console.log(a + d);
}
