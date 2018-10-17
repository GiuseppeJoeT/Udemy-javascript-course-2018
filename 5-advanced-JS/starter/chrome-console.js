// Open the Chrome Developer Tools, Console and type the following
Person.prototype

john.__proto__ === Person
// false

john.__proto__ === Person.prototype
// true

john.hasOwnProperty('name')
// true

john.hasOwnProperty('lastName')
// false

john instanceof Person
// true


// Almost everything in JS is an object
var x = [1,2,3];

console.log(x);
// the output is the array prototype, used to build array

// (3) [1, 2, 3]
// 0: 1
// 1: 2
// 2: 3
// length: 3
// __proto__: Array(0)
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
// __proto__: Object

console.log('So that you never wonder why we could simply call the PUSH method or something like this on all of our arrays, so now you know. It s because of the prototype chain.');