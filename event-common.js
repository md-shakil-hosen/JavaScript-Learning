// Handle just function Click 
function handleJustFunctionClick(){
 const justClickingMethod =   document.getElementById("clicking-method");
 justClickingMethod.innerText = 'Hello Bangladesh';
}

// Direct Event Listener 
document.getElementById("hanlde-event").addEventListener('click', function(){
    const p = document.getElementById("clicking-method");
    p.innerText = "Yes, Connected";
})

// Direct Update 

document.getElementById("updateName").addEventListener('click', function(){
    // বাটুনে ক্লিক করার পর কোন কাজটা হবে, তা এই ফাংশনের মাধ্যেমে বলে দিতে হবে ।
    const nameFiled = document.getElementById("name-field"); 
    const p = document.getElementById("updateText"); // Display  update the value
    p.innerText = nameFiled.value; // Connect to tha input value 
    nameFiled.value = ''; // Blank Field 
})