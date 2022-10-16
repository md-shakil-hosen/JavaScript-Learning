//Accessing the Last Array Element
const alfa=['A','B','C','D','D','E','F','G'];
//Looping Array Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
// Use Array Function 
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fLen1 = fruits1.length;

let text1 = "<ul>";
for (let i = 0; i < fLen1; i++) {
  text1 += "<li>" + fruits1[i] + "</li>";
}
text1 += "</ul>";

//Adding Array Elements
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById('demo').innerHTML=fruits2;
function myFruits(){
    fruits2.push("Shakil ");
   // document.getElementById('demo').innerHTML=fruits2;
}

//JavaScript Array Methods
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("array").innerHTML=fruits4.join(" * ");
//JavaScript Array pop()
//document.getElementById("pop").innerHTML=fruits4.pop(); // Pop just remove last element in array

// JavaScript array push()
const fruits5=["Banana","Orange","Apple"];
//document.getElementById("pop").innerHTML=fruits5.shift();

//JavaScript Array shift()
const fruits6=["Banana","Orange","Apple"];
//document.getElementById("pop").innerHTML=fruits5.unshift();

//JavaScript Array length
const fruits7=["Banana","Orange","Apple"];
//document.getElementById('arrayLength').innerHTML=fruits7.length('Mango');

//
const fruits8=["Banana","Orange","Apple"];
delete fruits8[2];

//JavaScript Array slice()
const fruits9=["Banana","Orange","Apple"];

//JavaScript Sorting Arrays
const fruits10=["Banana","Orange","Apple"]; // Last to first sort
//console.log(fruits9.sort());

//Reversing an Array
//console.log(fruits10.reverse());

//Sort the array in ascending order:
const NumberOfPoints=[200,10,40,60,30,80,90,45];
const NumberOfPoints1=[200,10,40,60,30,80,90,45];
NumberOfPoints.sort(function(a,b){return(a-b)});
NumberOfPoints1.sort(function(a,b){return(b-a)});
//console.log(NumberOfPoints1);

//The Compare Function

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("sort").innerHTML=points;

function myFunction1(){ // It's common function 
  points.sort();
  document.getElementById("sort").innerHTML=points;
}

function myFunction2(){ // It's calculation the sort function
  points.sort(function(a,b){return (a-b)});
  document.getElementById("sort").innerHTML=points;
}
const friendsName= ['Shakil', 'Imran', 'Hemel', 'Shohan','Pias','Hamim','Sadia', 'Joya','Kanta','mitu'];
document.getElementById('randomText').innerHTML=friendsName;
function randomMath(){
  friendsName.sort(function() {return 0.5 -Math.random()});
  document.getElementById('randomText').innerHTML=friendsName;
}

// Check Random number 
const randomNumberGen=[20, 38, 56, 45, 84, 82, 24, 13];
document.getElementById("randomNum").innerHTML=randomNumberGen;
function randomNumber(){
randomNumberGen.sort(function() {return 0.5- Math.random()});
document.getElementById("randomNum").innerHTML=randomNumberGen;
}

//The Fisher Yates Method
const randomNumbeCreate=[20, 38, 56, 45, 84, 82, 24, 13];
document.getElementById("randomNumValue").innerHTML=randomNumbeCreate;

function myRandomNumber(){
  for(let i=randomNumbeCreate.length-1; i>0; i--){
    let j=Math.floor(Math.random()*(1 * i));
    let k=randomNumbeCreate[i];
    randomNumbeCreate[i]=randomNumbeCreate[j];
    randomNumbeCreate[j]=k;
  }
  document.getElementById("randomNumValue").innerHTML=randomNumbeCreate;
}

//Find the Highest (or Lowest) Array Value