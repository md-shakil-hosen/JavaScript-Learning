// inches to Feet

function inchesToFeet(inches){
    var feet = inches / 12;
    return feet;
}


var MyInches = 132;
var feet = inchesToFeet(MyInches);
console.log(" My inches to Feet:", feet);

var dadiInches = 144;
var feet = inchesToFeet(dadiInches);
console.log(feet);

var naniInches = 148;
var feet = inchesToFeet(naniInches);
console.log(feet);

var nanaInches = 156;
var feet = inchesToFeet(nanaInches);
console.log(feet);


//Mile to Kilometer

function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(23.2);
console.log("My marathon mile is", marathon.toFixed(2) + " " + "kilometer");
