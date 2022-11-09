

function isEven(number){
 if(number % 2 == 0){
    return true;
 }
 return false;
}

const myNumber = 144;
const isEvenNUmber = isEven(myNumber);
console.log(isEvenNUmber);


// Check Odd Number 

function  isOdd(number){
    if(number % 2 == 1){
        return true;
    }
    return false;
}

const myFavNumber = 13;
const checkOdd = isOdd(myFavNumber);
console.log(checkOdd);