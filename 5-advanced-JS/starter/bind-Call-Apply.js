var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' 
            + this.name 
            + ', I\'m a ' + this.job 
            + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m  ' + this.name +
                        ', I\'m a ' + this.job +
                        ' and I\'m ' + this.age + ' years old.' +
                        ' Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('friendly', 'evening');

// method borrowing. The call() allows for a function/method belonging to one object to be assigned and called for a different object.
john.presentation.call(emily, 'formal', 'morning');

// the difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
john.presentation.apply(emily, ['friendly', 'afternoon']);

// the difference here is that bind() doesn't immediately call the function,
// but instead it generates a copy of the function so that we can store it somewhere.
var johnFriendly = john.presentation.bind(john, 'friendly');

// JS Currying: is just a technique in which we create a function based on another function, but with some preset parameters
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');
