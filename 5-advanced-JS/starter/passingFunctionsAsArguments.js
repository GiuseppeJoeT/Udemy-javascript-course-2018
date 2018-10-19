// Passing functions as arguments
var years = [1990, 1965, 1935, 2005, 1998]; 

function arrayCalc(arr, funct) {
    // funct is a CALLBACK function
    // because it is a function that we pass
    // into another function that we will then call later.
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(funct(arr[i]));
    }
    return arrRes;
}

function calculateAge(element) {
    return 2018 - element;
}

function isFullAge(element) {
    return element >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return "heart rate calculation impossible";
    }
    
    // max Heart Rate formula: 208 - 0.7 * personAge
    // so 208 - personAge 70% - Hirofumi Tanaka formula
}

var ages = arrayCalc(years, calculateAge);
// we pass into the arrayCalc function 
// the CALLBACK function calculateAge without parethesis
// be careful! Without, because we are just passing it as a function argument
// we are NOT calling it

var isFullAgeOk = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(isFullAgeOk);
console.log(rates);

