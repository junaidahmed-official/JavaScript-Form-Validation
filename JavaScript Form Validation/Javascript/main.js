
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', event => {
    event.preventDefault();
    checkInputs();
});

//get values from the inputs
checkInputs =  () => {
    //using trim() to remover whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //validating username
    if(usernameValue === ''){
        //show error
        //add error class in parent element
        setErrorFor(username, 'Username cannot be blank');
    } else{
        //add success class in parent element
        setSuccessFor(username);
    }

    //validating email
    if(emailValue === ''){
        //show error
        //add error class in parent element
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        //check if its a valid email address
        setErrorFor(email, 'Email is not valid');
    } else {
        //add success class in parent element
        setSuccessFor(email);
    }

    //validating password
    if(passwordValue === ''){
        //show error
        //add error class in parent element
        setErrorFor(password, 'Password cannot be blank');
    } else {
        //add success class in parent element
        setSuccessFor(password)
    }

    //validating password2 value (matching the two passwords)
    if (password2Value === ''){
        //show error
        //add error class in parent element
        setErrorFor(password2, 'Check Password cannot be blank');
    } else if (passwordValue !== password2Value){
        //check if both passwords are matching
        setErrorFor(password2, 'Passwords do not match');
    } 
    else {
        //add success class in parent element
        setSuccessFor(password2);
    }
}

setErrorFor = (input, message) => {
    const formContent = input.parentElement;
    const small = formContent.querySelector('small');

    // add error message inside small tag
    small.innerText = message;

    //add error class
    formContent.className = 'form-content error';
}

setSuccessFor = (input) => {
    const formContent = input.parentElement;
    
    //add success class
    formContent.className = 'form-content success';
}

isEmail = (value) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value);
}