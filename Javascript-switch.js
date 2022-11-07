var favColor = "";
switch(favColor){
    case 'Red':
        console.log("it's red color");
        break;
    case 'Green':
        console.log("it's green color");
        break;
    case 'Yellow':
        console.log("it's Yellow color");
        break;
     default:
        console.log("It's black Color");
}


// JavaScript Switch statement
// সুইচ স্টেটমেন্টে কাজ করার জন্য আমাদের যা যা লাগবে, ১. একটি Variable এর মান , ২. ‍Switch Statement (Variable name)  ৩. case ‘ভ্যালু দিতে হবে এখানে’: ৪. কমেন্ট করতে হবে  । ৫. break 

// var f = day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  //console.log(day);

  // Check Month 
  

  switch(new Date().getMonth()){
    case 01:
      month = "January";
      break;
    case 02:
      month = "February";
      break;
    case 03:
      month = "March";
      break;
    case 04:
      month = "April";
      break;
    case 05:
      month = "May";
      break;
    case 06:
      month = "June";
      break
    case 07:
      month = "July";
      break;
    case 08:
      month = "August";
      break;
    case 09:
      month = "September";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December"
  }
  console.log(month);