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
activePlayer = 1;

// Math.floor transform a decimal to an integer
// (Math.random() * 6) gives us numbers between 0 and 5, so we add 1 to reach 6 
dice = Math.floor(Math.random() * 6) + 1;


document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// use the .querySelector() to read and store a value
var x = document.querySelector('#score-1').textContent;
console.log(x);

// hide the Dice image
document.querySelector('.dice').style.display = 'none';