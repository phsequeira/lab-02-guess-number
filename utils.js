const result = document.getElementById('result');
const wonString = document.getElementById('won');
const lossString = document.getElementById('loss');

let winNumber = 0;
let lostNumber = 0;

export function numberChecker(userNumber, myNumber) {
    if (userNumber > myNumber) {
        return 1;
    }
    else if (userNumber < myNumber) {
        return -1;
    }
    else if (userNumber.value === myNumber.value) {
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

export function resetGame(value) {
    if (value === 0) {
        document.getElementById('play-again').disabled = false;
    }
}