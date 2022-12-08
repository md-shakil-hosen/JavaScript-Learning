// Get Deposit Button with function

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}





// Get deposit button 
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
  

//get Current Deposit Amount
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText ;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;

//Update Balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
});




// Get Withdraw button 
document.getElementById('Withdraw-button').addEventListener('click', function(){
//    const withdrawInput = document.getElementById('Withdraw-input');
//    const withdrawAmountText = withdrawInput.value;
//    const withdrawAmount = parseFloat(withdrawAmountText);
       const withdrawAmount = getInputValue('Withdraw-input');


//Update Withdraw Amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const perviousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = perviousWithdrawTotal + withdrawAmount ;  

// Update Balance after Withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
});