// Use multiple parameter 
var firstNumber = 100;
var secondNumber = 200;
function addTwoNumber (number1, number2){
    var sum = number1 + number2;
    return sum;
}
var sumResult = addTwoNumber(firstNumber, secondNumber);
console.log( 'Two sum value is :' +sumResult);


// Two  Multiplication  number
var favNumber1 = 34;
var favNumber2 =45
function multiplicationTowNum(num1, num2){
    var multipleCalculation = num1 * num2;
    return multipleCalculation;
}
var totalCalculation = multiplicationTowNum(favNumber1, favNumber2);
console.log('Tow multiply result is:' +totalCalculation);


// Division Two Number
function twoNumberDivision(num1, num2){
    var division = num1 / num2;
    return division;
}
var divisionResult = twoNumberDivision(100, 50);
console.log( 'Division value is:'+divisionResult);



// Three Number Add by three parameter

function threeNumberAdd(num1, num2, num3){
    var sumThreeNumber = num1 + num2 + num3;
    return sumThreeNumber;
}
var threeNumberResult = threeNumberAdd(20, 12, 30);
console.log( 'Your three Number value is:'+threeNumberResult);
