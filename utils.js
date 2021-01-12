const result = document.getElementById('result');
const wonString = document.getElementById('won');
const lossString = document.getElementById('loss');
const triesSpan = document.getElementById('tries');

let winNumber = 0;
let lostNumber = 0;
let tries = 4;
export function startGame(guess, randomNumber) {
    const numbCheckResult = numberChecker(guess.value, randomNumber);
    results(numbCheckResult);
    --tries;
    triesSpan.textContent = tries;
    tryAttempt(tries);
    if (numbCheckResult === 0) {
        return 0;
    }
}

export function numberChecker(userNumber, randNumber) {
    if (userNumber > randNumber) {
        return 1;
    }
    else if (userNumber < randNumber) {
        return -1;
    }
    else if (userNumber.value === randNumber.value) {
        return 0;
    }
    else return;
} 

export function results(numberChecker) {
    if (numberChecker === -1) {
        result.textContent = 'Sorry but your guess is too low';
    }
    else if (numberChecker === 1) {
        result.textContent = 'Sorry but your guess is too high';
    }
    else if (numberChecker === 0) {
        result.textContent = 'Congrats you guessed right!!';
        document.getElementById('submit').disabled = true;
    }
}
export function tryAttempt(tries) {
    if (tries === 0) {
        document.getElementById('submit').disabled = true;
    }
}
export function youWon(numberChecker) {
    if (numberChecker === 0) {
        winNumber++;
        wonString.textContent = winNumber;
    }
}
export function youLoss(tries) {
    if (tries === 0) {
        lostNumber++;
        lossString.textContent = lostNumber;
    }
}