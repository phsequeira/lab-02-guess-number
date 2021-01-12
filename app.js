// import functions and grab DOM elements
const triesSpan = document.getElementById('tries');
const guessOne = document.getElementById('guess-one');
const buttonOne = document.getElementById('submit-one');
const guessTwo = document.getElementById('guess-two');
const buttonTwo = document.getElementById('submit-two');
const guessThree = document.getElementById('guess-three');
const buttonThree = document.getElementById('submit-three');
const guessFour = document.getElementById('guess-four');
const buttonFour = document.getElementById('submit-four');
const wrongOne = document.getElementById('wrong-one');
const wrongTwo = document.getElementById('wrong-two');
const wrongThree = document.getElementById('wrong-three');
const wrongFour = document.getElementById('wrong-four');
const playAgain = document.getElementById('play-again');

let tries = 0;

// initialize state
buttonOne.addEventListener('click',  () => {
    console.log('yes')
});
// set event listeners to update state and DOM