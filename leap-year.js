//Check Leap Year - way =01
function leapYear (year){
    if(year % 4){
        // console.log("This is leap Year");
    }
    else{
        // console.log("This is not leap Year");
    }
}

// const Years = 2056;
// const checkLeapYear = leapYear(Years);
// console.log(checkLeapYear);



// Check Leap Year another way - 02
// program to check leap year
function checkLeapYear2(year){
    //three conditions to find out the leap year
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }
}

const myYear = 2000;
const checkMyLeapYear = checkLeapYear2(myYear);


//Example 2: Check Leap Year Using newDate()

function leapYearCheck(year){
    const Leap = new Date(year, 1, 29).getDate() === 29;
    if(Leap){
        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }
}

const leapYearNumber = 2000;
const resultLeapYear = leapYearCheck(leapYearNumber);