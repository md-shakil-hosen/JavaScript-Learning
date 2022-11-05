// Use multiple parameter 

var firstNumber = 100;
var secondNumber = 200;
function addTwoNumber (number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}
var sumResult = addTwoNumber(firstNumber, secondNumber);
console.log(sumResult);