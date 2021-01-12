const resultOne = document.getElementById('result-one');

export function numberChecker(userNumber, myNumber) {
    if (userNumber > myNumber) {
        console.log(myNumber);
        console.log('high');
        return 1;
    }
    else if (userNumber < myNumber) {
        console.log(myNumber);
        console.log('low');
        return -1;
    }
    else if (userNumber.value === myNumber.value) {
        console.log(myNumber);
        console.log('correct');
        return 0;
    }
    else return;
} 


export function results(numberChecker) {
    if (numberChecker === -1) {
        console.log('tooo low');
        resultOne.textContent = 'Sorry but your guess is too low';
    }
    else if (numberChecker === 1) {
        console.log('too high');
        resultOne.textContent = 'Sorry but your guess is too high';
    }
    else if (numberChecker === 0) {
        console.log('just right');
        resultOne.textContent = 'Congrats you guessed right!!';
    }
}