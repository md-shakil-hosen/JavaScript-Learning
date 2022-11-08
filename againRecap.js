// 3 types of variable 

var time = "10:00"; // String type
var bookPrice = 150; // number type
var isWhiteColor = true; // boolean type

//Array

var partners = ["abul", "kabul", "chabul", "dabul"];

// Check array element position 
var elementPosition = partners.indexOf("kabul"); // Check array Index
console.log(elementPosition);
var checkPartners = partners.length; // Check array length
console.log(checkPartners);
partners.push("Babul"); // Add array elements
partners.pop() // Remove Array element
console.log(partners);


//conditionals
if(bookPrice < 120){
    console.log(" I will buy the book");
}
else{
    console.log("mama! Kisu discount dan na");
}

// While loop

var number = 0;
while(number <=20){
    console.log(number);
    number++;
}

// For Loop 
var number = 0;
for(var i = 0; i < number.length; i++ ){
    console.log(i);
}

//function 

function isMoonUp(time){
    if(time >= 19 && time <= 5){
        return true;
    }
    return false;
}
 var moonStatus = isMoonUp(19);
 console.log(moonStatus);


 //value of Variable could change
 let price = 37;

 //Value of variable could not change
 const myName = "Shakil";
 
