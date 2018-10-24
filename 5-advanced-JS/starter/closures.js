// Lecture: Closures

// Le's write a function that returns a function
// which calculates how many years we have until retirement
function retirement(retirementAge) {

    var a = ' years left until the retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;

// A function that references bindings (retirementAge) from local scopes 
// around it is called a CLOSURE. 
        console.log((retirementAge - age) + a);
// even after a function returns, and execution context is gone,
// the variable object is still there
    }
};

 
// In Europe, usually the retirementAge is 65
var europeRetirement = retirement(65)(1986);
console.log(europeRetirement);

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementItaly = retirement(67);

retirementUS(1986);
retirementGermany(1986);
retirementItaly(1986);

// Exercise, rewrite the function interviewQuestion() (functionsReturningFunctions.js), using the power of CLOSURES
function interviewQuestion(job) {
    return function(name) {
        if (job === 'developer') {
            console.log(name + ', can yuo please explain us what is an array?');
        } else if (job === 'teacher') {
            console.log('what subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ' , what is your job?');
        }
    }
};

interviewQuestion('developer')('Luca');