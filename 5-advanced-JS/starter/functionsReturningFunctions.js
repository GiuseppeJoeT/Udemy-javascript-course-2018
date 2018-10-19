// Lecture: Functions returning functions
// let's create a function that creates 
// different interview questions for different jobs

function interviewQuestion(job) {
    if (job === 'developer') {
        return function(name) {
            console.log(name + ', can yuo please explain us what is an array?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('what subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ' , what is your job?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var developerQuestion = interviewQuestion('developer');
var unknownJob = interviewQuestion('Ciccio');

// teacherQuestion('Joe');
// developerQuestion('Francesco');
// unknownJob('Ciccio');
// developerQuestion('Cleto');
// developerQuestion('Daniel');

// direct function call, the second argument is for the returning function 
interviewQuestion('developer')('Luca');


var increaser = function(increase) {
    return function(value) {
        return increase + value;
    };
};

var increase5Times = increaser(5);


