// import functions and grab DOM elements
import { numberChecker, results, tryAttempt, youWon, youLoss, resetGame } from './utils.js';
const triesSpan = document.getElementById('tries');
const guess = document.getElementById('guess');
const button = document.getElementById('submit');
const playAgain = document.getElementById('play-again');
let tries = 4;
const randomNumber = Math.ceil(Math.random() * 20);
// initialize state
document.getElementById('play-again').disabled = true;

button.addEventListener('click', () => {

    --tries;
    triesSpan.textContent = tries;
    console.log(randomNumber);
    const numbCheckResult = numberChecker(guess.value, randomNumber);
    results(numbCheckResult);
    tryAttempt(tries);
    resetGame(tries);
    youWon(numbCheckResult);
    youLoss(tries);
});

playAgain.addEventListener('click', () => {

});