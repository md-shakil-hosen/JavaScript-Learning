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

//Reversing an Array
console.log(fruits9.sort());