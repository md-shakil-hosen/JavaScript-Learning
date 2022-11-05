// variable
var favoriteBook = " Never Stop Learning";

// Create Array
var booksList = [" Rich Ded Poor Ded", "hooked", " Never Stop Learning"];

// Check Array Index
var nevrStopIndex = booksList.indexOf(' Never Stop Learning');

// Add New Array in index no 1 positions
booksList[1] = "Man Vs World"; // Change Array Element

// Add new array in last position
booksList.push("Small Gaint");
//Remove array in last position
booksList.pop();
console.log(booksList);

// condition 
if(booksList[1] == "Man Vs World"){
    console.log(' Yes Right');
}
else{
    console.log(' Not Right Book');
}

//While loop 

var i = 0; // loop variable

while(i < 15){
    console.log(i);
    console.log("Looping Looping");
    i++;
}
// For Loop
for( var i = 0; i<15; i++){
    console.log(i);
}

