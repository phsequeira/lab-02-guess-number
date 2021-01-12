// import functions and grab DOM elements
import { numberChecker } from './utils.js';
const triesSpan = document.getElementById('tries');
const guessOne = document.getElementById('guess-one');
const buttonOne = document.getElementById('submit-one');
const resultOne = document.getElementById('result-one');
//const playAgain = document.getElementById('play-again');

let tries = 4;
const randomNumber = Math.ceil(Math.random() * 20);
// initialize state
buttonOne.addEventListener('click', () => {

    tries--;
    

    // fix this triesSpan.textContent = tries;
    numberChecker(guessOne.value, randomNumber);
});
// set event listeners to update state and DOM