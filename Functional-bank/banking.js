// Get deposit button 
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';

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
   const withdrawInput = document.getElementById('Withdraw-input');
   const withdrawAmountText = withdrawInput.value;
   const withdrawAmount = parseFloat(withdrawAmountText);
   withdrawInput.value = '';

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