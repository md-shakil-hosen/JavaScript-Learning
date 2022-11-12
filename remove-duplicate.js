// Duplicate Array  বের করার জন্য প্রথমে এমন একটি এ্যারে নিতে হবে যেখানে , একই  Element  বার বার  থাকবে ।

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'abul', 'kabul', 'babul', 'abul', 'dabul'];

function removeDuplicate(names){
    const unique = []; // এখানে নতুন  এ্যারেগুলো জমা থাকবে এই ভেরিয়েবলে া
    // for(let i = 0; i < names.length; i++){
    //     const element = names[i];
    //     // console.log(element);
    // }
    for(const element of names){ // এই লুপের element  ভেরিয়েবলের  মধ্যে  names এর সকল  এ্যারে রাখতে হবে ।
        if(unique.indexOf(element) == -1){  // এখানে unique.indexOf(element == -1) দ্বারা চেক করা হয়তেছে যে, যে এ্যারে  নাই তা চেক করা । 
            unique.push(element); // আর যদি না থাকে তাহলে element এর মধ্যে সকল  Array Push করে দিতে হবে ।
        }
    }

    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);