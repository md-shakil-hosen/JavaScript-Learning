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
