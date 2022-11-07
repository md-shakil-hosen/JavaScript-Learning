// ব্রেক :  একটি নিদিষ্ট শর্ত পূর্ণ হওয়ার পর েব্রেক করে দিবে । 

// While Loop With Condition 
// var i = 0
// while(i < 10){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i++;
// }

// While Loop with condition
// while(i < 10){
//     console.log(i);
//     if(i == 10){
//         break;
//     }
//     i++;
// }


// for loop with break statement
for( var i = 0; i <=20; i++){
    if(i > 7){
        break;
    }
}
// console.log(i);

// Declaration Loop , Break Statement 
//  কেমনভাব েএকটি Array  এর মধ্যে লুপ চালাতে হবে । 
// কোন একটি নিদিষ্ট সংখ্যা পাওয়ার পর লুপ আর চলবে না । 

 var favNumbers = [34, 36, 76, 100, 101, 500, 40, 45, 34, 23, 78, 23];

 for(var i = 0; i < favNumbers.length; i++){ //  i variable  এর মধ্যে সকল এ্যারের উপাদানসমূহকে নেওয়া হয়েছে
    var number = favNumbers[i]; //  Array  এর মান গুলো অন্য একটি ভরিয়েবলের মধ্যে রাখা হয়েছে ।
    console.log(number);
    if(number > 100 ){ // যদি  number এর মধ্যে থাকা  Arry এর মান যদি ১০০ এর বড় হয় তাহলে লুপ বন্ধ হয়ে যাবে 
        break;
    }
 
 }
