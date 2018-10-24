// Function constructor (Capital letter)
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function() {
    //     console.log(2018 - this.yearOfBirth);
    // };
};

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
};

// Add to Person class the .lastName property
Person.prototype.lastName = 'Smith';

// object literal, hard coded
var joe = {
    name: 'joe',
    yearOfBirth: 1986,
    job: 'Developer'
};

// John object instantiation, instance of the Person class
// So when we use the NEW operator, first a brand new empty object is created.
var john = new Person ('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var peter = new Person('Peter', 1949, 'retired');

john.calculateAge();
jane.calculateAge();
peter.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(peter.lastName);




