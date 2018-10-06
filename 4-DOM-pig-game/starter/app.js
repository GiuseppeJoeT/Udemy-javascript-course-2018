/*
import * as console from 'console';
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

// this variable keeps track of both players score
scores = [0,0];

roundScore = 0;
activePlayer = 0;


// Set the text content
// document.querySelector('#current-' + activePlayer).textContent = dice;


// hide the Dice image
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Roll Dice button Listener
document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random number
    
    // Math.floor transform a decimal to an integer
    // (Math.random() * 6) gives us numbers between 0 and 5, so we add 1 to generate a value between 1 and 6 
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    // we use the .src() method because the .dice class is an IMG html tag
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // ELSE IF the rolled number was a 1, next player turn
        // if activePlayer === 0 makes it equal to 1 otherwise equal to 0
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
      
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
    
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add  CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
   

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game 

});



