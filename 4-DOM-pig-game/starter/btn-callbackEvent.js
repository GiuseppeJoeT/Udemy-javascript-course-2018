// use the .querySelector() to Get the text content
var x = document.querySelector('#score-1').textContent;
console.log(x);

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


function btn() {
    // somenthing
};

// And this button function btn()
// is then called the CALLBACK function.
// And that's because it's a function that is not called by us,
// but, by another function.
// The function that we pass into another function,
// as an argument, and this function, in this case,
// the EventListener method,
// will then call that function for us.
document.querySelector('.btn-roll').addEventListener('click', btn);


// The Element.classList is a read-only Property with Methods .remove() and .add()
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.add('active');