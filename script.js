const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
});
const emailRegex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
// Login cases

const email = document.getElementById("email")
const emailSpan = document.getElementById("emailSpan")
const loginButton = document.getElementById("loginButton")

loginButton.addEventListener("click", function(){

    if (emailRegex.test(email.value)){
        emailSpan.innerText = "Your email is validate"
        emailSpan.style.color = "green"
    }else{
        emailSpan.innerText = "Your email is invalid"
        emailSpan.style.color = "red"
    }

} )

const password = document.getElementById("password")
const passwordSpan = document.getElementById("passwordSpan")

loginButton.addEventListener("click", function (){

    if (passwordRegex.test(password.value)){
        passwordSpan.innerText = "Your password is correct"
        passwordSpan.style.color = "green"
    }else{
        passwordSpan.innerText = "Your password is incorrect"
        passwordSpan.style.color = "red"
    }

} )


//Sign up cases

const emailInputSpan = document.getElementById("emailInputSpan")
const emailInput = document.getElementById("emailInput")
const passwordInputSpan = document.getElementById("passwordInputSpan")
const passwordInput = document.getElementById("passwordInput")
const confirmPasswordSpan = document.getElementById("confirmPasswordSpan")
const confirmPassword = document.getElementById("confirmPassword")
const signUpButton = document.getElementById("signUpButton")

signUpButton.addEventListener("click", function(){

    if (emailRegex.test(emailInput.value)){
        emailInputSpan.innerText = "Your email is validate"
        emailInputSpan.style.color = "green"
    }else{
        emailInputSpan.innerText = "Your email is invalid"
        emailInputSpan.style.color = "red"
    }

} )

signUpButton.addEventListener("click", function (){

    if (passwordRegex.test(passwordInput.value)){
        passwordInputSpan.innerText = "Your password is correct"
        passwordInputSpan.style.color = "green"
    }else{
        passwordInputSpan.innerText = "Your password is incorrect"
        passwordInputSpan.style.color = "red"
    }
    return passwordInput
})


signUpButton.addEventListener("click", function (){

    if (passwordInput === confirmPassword){
        confirmPasswordSpan.innerText = "Passwords match"
        confirmPasswordSpan.style.color = "green"
    }else{
        confirmPasswordSpan.innerText = "Passwords aren't match"
        confirmPasswordSpan.style.color = "red"
    }

})

