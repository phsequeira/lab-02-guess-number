// import functions and grab DOM elements
import { numberChecker, results } from './utils.js';
const triesSpan = document.getElementById('tries');
const guessOne = document.getElementById('guess-one');
const buttonOne = document.getElementById('submit-one');

//const playAgain = document.getElementById('play-again');

let tries = 4;
const randomNumber = Math.ceil(Math.random() * 20);
// initialize state
buttonOne.addEventListener('click', () => {

    tries--;
    

    // fix this triesSpan.textContent = tries;
    const numbCheckResult = numberChecker(guessOne.value, randomNumber);
    console.log(numbCheckResult);
    results(numbCheckResult);
});
// set event listeners to update state and DOM