// not IIFE
function game() {
    var score = Math.floor(Math.random() * 10);
        console.log("the score (not IIFE ) is: " + score);
        console.log("is the score equals or greater 5? ");
        console.log(score >= 5);
};

game();

// IIFE
(function () {
    var score = Math.floor(Math.random() * 10);
    console.log("the score (IIFE) is: " + score);
    console.log(score >= 5);
})();


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
