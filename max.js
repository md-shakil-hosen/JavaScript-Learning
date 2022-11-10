const business = 1580;
const minister = 2450;
const army = 896;

// if( business > minister){
// }else if (army < minister){
// }else{
 
// }

// Compare three number 
if(business > minister && army < business){
    console.log("Business Er Pola is Bigger");
}else if(minister > business && army < minister){
    console.log("Minister er Pola is Bigger");
}else{
    console.log("Army er pola is Bigger");
}


// Second System  of largest number 

var max = Math.max(business, minister, army);
console.log("Largest Number is:", max);


// Find largest Number Use function

function findLargestNumber (first, second){
    if(first > second){
        return first;
    }
    return second;
}
const largestNumber = findLargestNumber(45, 26);
console.log(largestNumber);



// find largest number in three number  use by Function 

function largestNumberCheck (number1, number2, number3){
    if(number1 > number2 && number1 > number3){
        return number1;
    }
    else if (number2 > number1 && number2 > number3){
        return number2;
    }
    return number3;
}

const myNumberIs = largestNumberCheck(56, 258, 789);
console.log(myNumberIs);