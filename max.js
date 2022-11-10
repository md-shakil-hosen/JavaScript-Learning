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