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


function results(numberChecker) {
    if (numberChecker = -1) {
        
        //results.textContent = 'Sorry but your guess is too low';
    }
    else if (numberChecker = 1) {
        console.log('1');
        //results.textContent = 'Sorry but your guess is too high';
    }
    else {
        console.log('00');
        //results.textContent = 'Congrats you guessed right!!';
    }
}