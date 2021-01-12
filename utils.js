const resultOne = document.getElementById('result-one');

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
        resultOne.textContent = 'Sorry but your guess is too low';
    }
    else if (numberChecker === 1) {
        resultOne.textContent = 'Sorry but your guess is too high';
    }
    else if (numberChecker === 0) {
        resultOne.textContent = 'Congrats you guessed right!!';
    }
}

export function tryAttempt(tries) {
    if (tries === 0) {
        alert('Game Over!! You have run out of tries!');
        document.getElementById('submit-one').disabled = true;
    }
}