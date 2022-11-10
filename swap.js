//  change variable value 

var firstNumber = 5;
var secondNumber = 7;

var temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;
console.log(firstNumber, secondNumber);

var temp2 = secondNumber;
secondNumber = firstNumber;
firstNumber = temp2;
console.log(firstNumber, secondNumber);


// Destructuring 
[firstNumber, secondNumber] = [secondNumber, firstNumber];
console.log(firstNumber, secondNumber);