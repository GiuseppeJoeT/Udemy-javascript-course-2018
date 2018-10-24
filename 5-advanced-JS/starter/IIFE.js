// Imagine that we wanted to build a little game,
// where we win the game if a random score from zero to nine
// is greater or equal to five, and lose if it's smaller
// But, we want to keep the score hidden in this game

// not IIFE
function game() {
    // Math.floor transform a decimal to an integer
    // (Math.random() * 10) gives us numbers between 0 to 9 
    var score = Math.floor(Math.random() * 10);
        console.log("the score (not IIFE ) is: " + score);
        console.log("is the score equals or greater 5? ");
        console.log(score >= 5);
};

game();

// IIFE
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
(function () {
// what's inside of parenthesis cannot be a statement,
// JavaScript will know that it should treat this as an expression
    
    var score = Math.floor(Math.random() * 10);
    console.log("the score (IIFE) is: " + score);
    console.log(score >= 5);
// And then after that, we only have to invoke the function, as soon as we close it
})();


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

// test a simple string output
function ritornaDelTesto(testoInput) {
    (function(testoOutput) {
        document.write(testoInput + testoOutput);
    })();
};