// //Accessing the Last Array Element
// const alfa=['A','B','C','D','D','E','F','G'];
// //Looping Array Elements
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// // Use Array Function 
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// let fLen1 = fruits1.length;

// let text1 = "<ul>";
// for (let i = 0; i < fLen1; i++) {
//   text1 += "<li>" + fruits1[i] + "</li>";
// }
// text1 += "</ul>";

// //Adding Array Elements
// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// //document.getElementById('demo').innerHTML=fruits2;
// function myFruits(){
//     fruits2.push("Shakil ");
//    // document.getElementById('demo').innerHTML=fruits2;
// }

// //JavaScript Array Methods
// const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
// //document.getElementById("array").innerHTML=fruits4.join(" * ");
// //JavaScript Array pop()
// //document.getElementById("pop").innerHTML=fruits4.pop(); // Pop just remove last element in array

// // JavaScript array push()
// const fruits5=["Banana","Orange","Apple"];
// //document.getElementById("pop").innerHTML=fruits5.shift();

// //JavaScript Array shift()
// const fruits6=["Banana","Orange","Apple"];
// //document.getElementById("pop").innerHTML=fruits5.unshift();

// //JavaScript Array length
// const fruits7=["Banana","Orange","Apple"];
// //document.getElementById('arrayLength').innerHTML=fruits7.length('Mango');

// //
// const fruits8=["Banana","Orange","Apple"];
// delete fruits8[2];

// //JavaScript Array slice()
// const fruits9=["Banana","Orange","Apple"];

// //JavaScript Sorting Arrays
// const fruits10=["Banana","Orange","Apple"]; // Last to first sort
// //console.log(fruits9.sort());

// //Reversing an Array
// //console.log(fruits10.reverse());

// //Sort the array in ascending order:
// const NumberOfPoints=[200,10,40,60,30,80,90,45];
// const NumberOfPoints1=[200,10,40,60,30,80,90,45];
// NumberOfPoints.sort(function(a,b){return(a-b)});
// NumberOfPoints1.sort(function(a,b){return(b-a)});
// //console.log(NumberOfPoints1);

// //The Compare Function

// const points = [40, 100, 1, 5, 25, 10];
// //document.getElementById("sort").innerHTML=points;

// function myFunction1(){ // It's common function 
//   points.sort();
//   ///document.getElementById("sort").innerHTML=points;
// }

// function myFunction2(){ // It's calculation the sort function
//   points.sort(function(a,b){return (a-b)});
//   //document.getElementById("sort").innerHTML=points;
// }
// const friendsName= ['Shakil', 'Imran', 'Hemel', 'Shohan','Pias','Hamim','Sadia', 'Joya','Kanta','mitu'];
// //document.getElementById('randomText').innerHTML=friendsName;
// function randomMath(){
//   friendsName.sort(function() {return 0.5 -Math.random()});
//   //document.getElementById('randomText').innerHTML=friendsName;
// }

// // Check Random number 
// const randomNumberGen=[20, 38, 56, 45, 84, 82, 24, 13];
// //document.getElementById("randomNum").innerHTML=randomNumberGen;
// function randomNumber(){
// randomNumberGen.sort(function() {return 0.5- Math.random()});
// //document.getElementById("randomNum").innerHTML=randomNumberGen;
// }

// //The Fisher Yates Method
// const randomNumbeCreate=[20, 38, 56, 45, 84, 82, 24, 13];
// //document.getElementById("randomNumValue").innerHTML=randomNumbeCreate;

// function myRandomNumber(){
//   for(let i=randomNumbeCreate.length-1; i>0; i--){
//     let j=Math.floor(Math.random()*(1 * i));
//     let k=randomNumbeCreate[i];
//     randomNumbeCreate[i]=randomNumbeCreate[j];
//     randomNumbeCreate[j]=k;
//   }
//   //document.getElementById("randomNumValue").innerHTML=randomNumbeCreate;
// }

// //Find the Highest (or Lowest) Array Value
// const lowestNumber=[20, 38, 56, 45, 84, 82, 24, 13];
// //document.getElementById("lowestText").innerHTML=lowestNumber;

// lowestNumber.sort(function(a,b){return a-b});
// //document.getElementById("lowestText").innerHTML=lowestNumber[0];

// // Trying to self (find to lower string number)

// const indexingLowerStringName=[20,025,62,89,5256,26,23,25,89,45];
// indexingLowerStringName.sort(function(a,b){return (b-a)});
// //document.getElementById("indexinglowerName").innerHTML=indexingLowerStringName;

// // Understand Clear 
// // Using Math.max() on an Array sort right Method
// const points22 = [40, 100, 1, 5, 25, 10];
// //document.getElementById("numberRightMethod1").innerHTML = myArrayMax(points22);

// function myArrayMax(arr) {
//   return Math.max.apply(null, arr); // It's right method for max finding array
// }

// // Sorting Object Arrays
// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];
// displayCars();
// cars.sort(function(a,b){return (a.type - b.year)});
// displayCars();
// //document.getElementById("carsArray").innerHTML=cars;

// //My Min / Max JavaScript Methods
// const points23 = [40, 100, 1, 5, 25, 10];
// document.getElementById('MaxNumber').innerHTML=myArrayMax(points);

// function myArrayMax(arr){
//   let len = arr.length;
//   let max = Infinity;
//   while (len --){
//     if (arr[len]<max){
//       max = arr[len];
//     }
//   }
//   return max;
// }

// JavaScript Array Iteration - ponorabitri
// JavaScript Array forEach()
// JavaScript Array map()
// var numbers1 = [20, 23, 10, 45, 63, 12, 58];
// var numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array){
// //console.log( value*2);
// }

// JavaScript Array filter()
// ১. কোন একটি অ্যারে থেকে নিদিষ্ট কোন অ্যারেকে ছেকে নিযে আসা । কোন একটি শর্ত থাকতে পারে । 

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// //document.getElementById("demo").innerHTML = over18;

// function myFunction(value, index, array) {
// return(value > 20);
// }
// console.log(over18);

// // ----------JavaScript Array reduce()----------

// const Price1 =[240, 520, 120];
// const arrayReduce = Price1.reduce(myFunction1);
// //document.getElementById("demo1").innerHTML= arrayReduce;

// function myFunction1(total, value, index, array){
//     return ( total + value);
// }

// ----------------------------------------

// var numbers3 = [42, 56, 23, 14, 25,10, 23];
// let sum = numbers3.reduce(myFunction6, 100);

// document.getElementById("demo2").innerHTML=sum;

// function myFunction6(total, value){
//     return total + value;
// }

// ---------------------JavaScript Array every()-------------------------
// var numbers4 = [42, 56, 23, 14, 25,10, 23];
// let sum1 = numbers4.every(everyFunction);

// //document.getElementById("demo2").innerHTML=" All over is 10"+ " "+sum1;
// //function everyFunction(value, index, Array){
//     return value > 20
// }

// -----------Slice() Method---------------

// var fruits = " I am a Programmer";

// console.log(fruits.slice(2,7));
// console.log(fruits.slice(-4));


// JavaScript Array some()
// var numbers5 = [42, 56, 23, 14, 25,10, 23];
// let over = numbers5.some(someFunction);

// document.getElementById("demo3").innerHTML=over;

// function someFunction(value, index, array){
//     return value >100;
// }

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// var lastIndex =fruits.lastIndexOf("Orange") + 1;
// document.getElementById("demo4").innerHTML = lastIndex;

// var numbers5 = [42, 56, 23, 14, 25,10, 23];
// let over = numbers5.find(myFindFounction);

// //document.getElementById("demo5").innerHTML=over;

// function myFindFounction(value, index, array){
//     return value >18;
// }


// JavaScript Array findIndex()

// var numbers5 = [4, 9, 16, 25, 29];;
// let result = numbers5.findIndex(myFindIndexFunction);

// document.getElementById("demo5").innerHTML =result;

// function myFindIndexFunction(value, index, array){
//     return value > 25;
// }


// বিশেষ শর্তকবার্তা ঃ অবশ্যই জাভাস্কিপ্ট লাইন বাই লাইন পড়ে থাকে । কোন একটি কাজ সংগঠন হওয়ার পরে , ফলাফল দেখাবে এর জন্য শেষ ফলাফলটা দেখার জন্য শেষে কমান্ড এপ্লাই করতে হবে ।

//Create an array
const cars = ["Saab", "Volvo", "BMW"];
//Change an Element
cars[0]="Toyota";
//Add Element
cars.push("Novena");
//Display result
//document.getElementById("demo6").innerHTML = cars;


//Create an Array
const bestNumber = [20, 56, 32, 10, 20, 12];
//Change Element 
bestNumber[1] = 100;
//Add Element
bestNumber.push(25);
//document.getElementById("demo6").innerHTML = bestNumber;

//Const Block Scope
// const cars1 = ["Saab", "Volvo", "BMW"];

// Block Scope
// {
//     const cars1 = ["Saab", "Volvo", "BMW"]
// }
// .document.getElementById("demo7").innerHTML = cars1[0];

//Creating Date Objects
// 1. new Date()

//5 numbers specify year, month, day, hour, and minute:
var d = new Date(2000, 11, 30, 8, 30 );
var d1 = new Date(99, 3, 4);

//document.getElementById("date").innerHTML = d;
//document.getElementById("date").innerHTML = d1;

//new Date(dateString)
var d2 =new Date("December 30, 2000 8:20:00");
var d3 =new Date(0);
//document.getElementById("date1").innerHTML = d3;
 //1. ISO Date -2000-12-30 (The International Standard  )
 // 2.Short Date = 30/12/2000
 //3.Long Date = Mar 25 2015" or "25 Mar 2015

// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)


//----------------The getFullYear() Method-----------

const getMethod = new Date("2021-03-25");
var getResult =getMethod.getDate();
//document.getElementById("dateMethod").innerHTML = getResult;

//---------------JavaScript Set Date Methods-----------
// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)



//JavaScript Math Object
// 1.Math.PI 
// 2.Math Methods
    // - Math.Round(1.4) // যদি দশমিক সংখ্যার পরে, ৪ থাকে তাহলে Math.Round এর নিচের পূর্ণসংখ্যাটি দেখাবে।
    // - Math.Round(1.5) // আর যদি দশমিক ৫ তার সমান থাকে তাহলে UP Number পূর্ণ সংখ্যাটিই দেখাবে ।
    // - Math.Round(1.6) // অন্যথায় যদি ৫ এর উপরে দেখায় তাহলে পরবর্তী পূর্ণ সংখ্যা দেখাবে ।
  
    //Math.ceil(4.6)    // এটি সবসময় আপ বা উপরের সংখ্যাটিই নিয়ে থাকে ।
    //Math.floor(4.7)   //এটি সবসময় নিচের সংখ্যাটিই  নিয়ে থাকে ।
    // Math.trunc()     // এটি সবসময় পূর্ণ্ সংখ্যা ফেরত দেয় ।
    // Math.sign()      // এটি শুধুমাত্র নেগেটিভ অথবা পজেটিভ নাম্বারটি দেখায় ।
    //Math.pow(x, y)    // এখানে ম্যাথ.পাউ (পাওয়ার), x হলো সূচক এবং y হলো ঐ সূচকের পাওয়ার । যেকোন সংখার পাওয়ার বের করার  জন্য  এই মেথেডটি ব্যবহার করা হয় ।
    // উদাহরণ ঃ 
   // document.getElementById("mathObject").innerHTML =Math.pow(8,2);
    //Math.sqrt(68)     // কোনো সংখ্যার বর্গ নির্ণয় করার জন্য এটি ব্যবহার করা হযে থাকে । 
    //Math.abs(-4,8)   //  এটির মধ্যে যেকোনা নেগেটিভ সংখ্যা থাকলেও , তা েসবসময় পজিটিভ সংখ্যায় দেখোয় ।
    // Math. min and Math.Max // কোনো একটি অ্যারের মধ্যে থাকা সবচেযে বড় অথবা সবচেয়ে ছোট সংখ্যা বের করার জন্য এটি ব্যবহার করা হয় ।
    //Math.random()   // রেনডম. ম্যাথ ,, আমাদের যেকোনো সংখ্যা এলোমেলোভোবে দেখায় ।

     //document.getElementById("mathObject").innerHTML =Math.random()

    // document.getElementById("mathObject").innerHTML = Math.min(40,1200,-563,25,-85,45);
    // document.getElementById("mathObject").innerHTML = Math.max(40,1200,-563,25,-85,45);

const time =new Date().getHours();  // এখানে একটি ভেরিয়েবল নেওয়া হয়েছে । আমরা সময় নিয়ে কাজ করবো এর জন্য একটি নিউ ডে মেথড নিয়েছি । এবং এর মধ্যে থেকে getHours() মেথডটাকে নিয়েছি । কারণ getHours()  হয়তেছে যে new Date( এর একটি মেথড ।
let greeting; // এখানে নতুন একটি ভেরিয়েবল নিয়েছি যেন , নতুন একটি ভেরিয়েব ডিক্লেয়ার করতে পারি ।

if(time >10){
    greeting = "Good morning";
}else if(time <20){
    greeting = "Good day";
}else{
    greeting = "Good evening";
}

//document.getElementById("elseIf").innerHTML = greeting;

// JavaScript Switch Statement 
// 1.  প্রথমে  ভেরিয়েবল ডিক্লেয়ার করতে হবে । 
// ২. সুইচ স্টেটমেন্টর কাঠামোর মধ্যে কাজ করতে হবে ।

// let weekDay ;

// switch(কোনটি নিয়ে কাজ করবো তা উল্লেখ করতে হবে । কোন বিষয়ের সাপেক্ষে কাজ করবো তা উল্লেখ করতে হবে ।)
// case 0:
// কোন কাজটা হবে তা উল্লেখ েকরতে হবে ।
// break; এটি মূলত সকল ব্লক চেক করে ,যদি শর্তর মিল খুজে না পায় তাহেলে , ব্রেক করে অন্যটাতে চলে যায় ।
let loveDay;

switch(new Date().getDay()){
    case 0:
        loveDay = "Sunday";
        break;
    case 1:
        loveDay = "Monday";
        break;
    case 3:
        loveDay = "Wednesday";
        break;
    case 4:
        loveDay = "Thursday";
        break;
    case 5:
        loveDay = "Friday";
        break;
    case 6:
        loveDay = "Saturday";
    default:
        loveDay = "Looking forward to the Weekend";

}

//document.getElementById("elseIf").innerHTML = "Today is " + loveDay;

// The default Keyword


// JavaScript In Loop

// const person = {fname: "Shakil", lname: "Mahamud", age: 21};
// let txt =" ";


// for (let x in person){
//     txt +=person[x]; + " ";
// }
// console.log(txt);

// The Break Statement
// let text = "";
// for (let i = 0; i<10; i++){
//     if(i === 3){break}
//     text += "The number is" + i + "<br>"
// }
// console.log(text);

// Scope 


// let carName = "Volvo"; 

// function myFunction() {
//   console.log( "I can display " + carName);
// }

// const numbers = [45, 4, 9, 16, 25, "Shakil", "Arham"];
// let text ="";
// numbers.forEach(myFunction);

// function myFunction(value, index, array){
//     text +=value + "<br>"
// }

// document.getElementById("demo20").innerHTML = text;
// console.log(text);

//------------------Set() Method---------------


// // 1. Create a set
// const latters = new Set(['a','b','c','d']);
// //new set result
// console.log(latters.size);

// //1.---------------- Create a set---------------
// const addLetters =new Set();

// //Adding value in set Method
// addLetters.add('Shakil');
// addLetters.add('Shakib');

// console.log(addLetters);
// console.log(addLetters.values());

//---------------JavaScript Maps-------------------
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

//   const friendsName = new Map([
//     ["Shakil", 21],
//     ["Sabbir", 29],
//     ["Shakib",22],
//   ])

//   console.log(friendsName.get("Shakil"));
//   console.log(fruits.get("apples"));


// //--------------- Set Method---------------
//  const myProgram = new Map();

//  myProgram.set("JavaScript",80);


//  // --------------Delete Method--------------
//  //myProgram.delete("JavaScript");

//  console.log(myProgram.has("JavaScript"));


// ----------------Primitive Data---------------
// string
// number
// boolean
// undefined

// ----------------Complex Data----------------------

//--------------JavaScript Type Conversion-----------
//-------------JavaScript Regular Expressions--------
//-----------JavaScript Operator Precedence------------
//------------JavaScript Arrow Function------------
//------------JavaScript Modules--------------
//-----------JavaScript JSON-------------------
//------------JSON Syntax Rules----------- 
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays


//------JSON Objects---------
let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

//JSON ফাইলকে একটি অবজেক্ট তৈরি করা হয়েছে া
const obj =JSON.parse(text);
// অবজেক্ট থেকে ডাটাগুলোকে দেখানো হয়েছে া
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);

// Converting a JSON Text to a JavaScript Object
// JavaScript Debugging
//JavaScript Style Guide



// function myNumber(){  
//     var i = 20;  
//     if (i == 20){
//         console.log("Wrong");
//         if(i < 15){
//             console.log("Wrong");
//         }else if(i < 18){
//             console.log("Wrong");
//         }else{
//             console.log("True");
//         }
//     } 
// }
// myNumber();



//   console.log("i is 10");
    // else if (i == 15)
    //   console.log("i is 15");
    // else if (i == 20)
    //   console.log("i is 20");
    // else
    //   console.log("i is not present");

    // var x = myNumber(4, 5);

    // function myNumber(a, b){
    //     return a + b;
    // }
    // console.log(x);

    // const x = function (a, b) {return a * b};
    // let z = x(5, 6);
    // console.log(z);

    function findMax(){
        let max = -Infinity;
        for(let i = 0; i < arguments.length; i++){
            if(arguments[i] > max){
                max = arguments[i];
            }
        }
        return max;
    }

    console.log(findMax(4, 5, 6));

    // const myObject = {
    //     fName : " Shakil ",
    //     lName : " Mahmud ",
    //     fullName : function(){
    //         return this.fName + " " + this.lName;
    //     }
    // }
    // console.log(myObject.fullName());

    //------------JavaScript Function call()------------
    //--------The JavaScript call() Method----

const person = {   // একটি ভেরিয়েবলে ডিক্লেয়ার করলাম, যার মধ্যে কী রেজাল্ট পাবো তার ইন্সট্রাকশন দেওয়া থাকবে ।
    fullName : function(){
        return this.firstName + " " + this.lastName; // এখানে আমরা দিস দ্বারা বোঝায়তেছি যে,lastName অবজেক্টটি এই পারসনের মধ্যেই রয়েছে া 
    }
}

const person1 = {
    firstName: " Shakil",
    lastName: " Mahmud"
}
const person2 = {
    firstName: " Imran",
    lastName: " Khan"
}
const person3 = {
    firstName: " Abul",
    lastName: " Hasan"
}

console.log(person.fullName.call(person1)); // এখানে fullName অবজেক্টটি  person নামক  ভেরিয়েবলের মধ্যে রয়েছে ্ এবং আমরা সেই ফলনেম টিকে কল করেছি যেন আমাদের ফল নেমটি দেখায় ।  