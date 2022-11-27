
// Handel Deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    //Get the amount deposited
    const depositInputField = document.getElementById('deposit-input');
    const depositAmount = depositInputField.value;
    depositInputField.value ='';


    // input total amount 
    //seen the amount in display field
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText =depositAmount; // cath the display $00 field and in amount input value
});