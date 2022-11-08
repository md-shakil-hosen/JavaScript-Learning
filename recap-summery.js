// variable declaration

// var carsName = "BMW";
let carsName = "Rachitis";
const Pi = 3.1416;

// Array Declaration 
var friendsName = ["Abir", "Kobir", "Musa"];
//check array length roll -01
console.log(friendsName.length);
// Check array index
console.log(friendsName.indexOf("Kobir"));
//Change array element 01
friendsName[1] = "Shakil";
console.log(friendsName);

//While loop

// var num = 0;
// while( num <= 10){
//     console.log(i);
//     i++;
// }

// For loop
// for(var i = 0; i < friendsName.length; i++){
//     console.log(i);
// }

// Check an array element 
if(friendsName.indexOf("mama") == -1){
    console.log("Opps! Mama Is Missing");
}

if(friendsName.indexOf("Abir") != -1){
    console.log("opps! Abir is is hears");
}

//Function 
// Add three number

function addThreeNumber(number1, number2, number3){
    var total = number1 + number2 + number3;
    return total;
}

var totalSum = addThreeNumber(25, 23, 56);
console.log(totalSum);


// Object 

var mobile = {
    bradName: "Oppo",
    color: "Black",
    price: 200
}

mobile.bradName = "Samsung";
console.log(mobile);