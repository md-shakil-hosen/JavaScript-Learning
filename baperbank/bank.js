
// Even Handler 
document.getElementById('login-submit').addEventListener('click', function(){
    //Get User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    emailField.value = '';

    // Get User Password
    const PasswordField = document.getElementById('user-pass');
    const userPass = PasswordField.value;
    PasswordField.value = '';

    // conditions
    if(userEmail == 'admin@gmail.com' && userPass == 'ami'){
        //Redirect another page location
        window.location.href = 'banking.html'
    }
})
