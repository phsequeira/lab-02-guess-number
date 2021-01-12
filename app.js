// import functions and grab DOM elements
import { startGame, youWon, youLoss } from './utils.js';
const triesSpan = document.getElementById('tries');
const guess = document.getElementById('guess');
const button = document.getElementById('submit');
let tries = 4;
const randomNumber = Math.ceil(Math.random() * 20);
// initialize state
button.addEventListener('click', () => {

    --tries;
    triesSpan.textContent = tries;
    const game = startGame(guess, randomNumber);
    youWon(game);
    youLoss(tries);
});
