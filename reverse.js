
const greetings = "Hello, How are you";
function reverseString(text){
    let reverse = '';
    for(const letter of text){       
        reverse = letter + reverse;
    } 
    return reverse;
}


const reversed = reverseString(greetings);
console.log(reversed);