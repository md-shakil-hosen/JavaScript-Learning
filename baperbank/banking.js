
// Handel Deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    //Get the amount deposited
    const depositInputField = document.getElementById('deposit-input');
    const newDepositAmountText = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    depositInputField.value ='';


    // Update Deposit total
    //seen the amount in display field
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmount + newDepositAmount ;
    depositTotal.innerText = newDepositTotal; // cath the display $00 field and in amount input value


    // Update Account Balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
});

// Withdraw Event Handler 
    document.getElementById('Withdraw-button').addEventListener('click', function(){
        const WithdrawInputField = document.getElementById('Withdraw-input');
        const newWithdrawAmountText = WithdrawInputField.value;
        const newWithdrawAmount = parseFloat(newWithdrawAmountText);
        WithdrawInputField.value = '';
     


        //Update withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawText = withdrawTotal.innerText;
        const previousWithdrawAmount = parseFloat(previousWithdrawText);
        const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount ;
        withdrawTotal.innerText = newWithdrawTotal;

        // Update Balance 
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceText);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotal.innerText = newBalanceTotal;

    });