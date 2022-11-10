const numbers = [45, 20, 46, 23, 25, 45, 96];
for(let i = 0; i < numbers.length; i++){
    numbers[i];
    // console.log(i);
}


// Again 

const myNumbers = [45, 20, 46, 23, 25, 45, 96];
for( let i = 0; i < myNumbers.length; i++){
    var elements = numbers[i]; //  সকল এ্যারে ইন্ডেক্স  অনুযায়ী , Elements এর মধ্যে রাখা হয়েছে । 
    // console.log(elements);
}

// Sum array Elements 

const yoursNumbers = [45, 20, 46, 23, 25, 45, 96];
let sum = 0;
for(let i = 0; i < yoursNumbers.length; i++){
    const arrayElements = yoursNumbers[i];
    sum = sum + arrayElements;
}
console.log(sum); // All is count 

// Sum array Elements with functions

function sumTotalElements(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const elements = numbers[i]; // সকল অ্যারে ইলিমেন্টস এই ভেরিয়েবলের মধ্যে রেখে দিলাম । 
        sum = sum + elements; // সাম এর মধ্যে সকল ইলিমেন্টস যোগ করে রাখা হয়েছে । 
    }
    return sum;
}

const totalSum = sumTotalElements([456, 12, 236, 45]);
console.log(totalSum);