// Validate Function for validating signup form 

console.log("script linked!");

const form = document.querySelectorAll('#sign-up-form input');
const submit = document.querySelector('#submit-btn');
const usrPass = document.getElementById("password");
const userPassConfrm = document.getElementById("confirm_password");
        
//Client side validation to check if passwords match (will need server side validation as well)
function Validate(){
    isValid = true;
    console.log("Submit Button clicked");
    //loop through all items in the form, only getting the inputs
    for(x = 0; x < form.length; x++){
        form[x].setAttribute("required","");
    }
    if(userPassConfrm.value != usrPass.value){
      
        userPassConfrm.setCustomValidity("Passwords must match");
        console.log(usrPass.checkValidity() + "  " + usrPass.value);
        console.log(userPassConfrm.checkValidity() + "  "+userPassConfrm.value);
        usrPass.classList.add("invalid")
        
        isValid = false;
        return false;

    }else{
        userPassConfrm.setCustomValidity("");
        usrPass.classList.remove("invalid");
    }
    // Loops through and logs the style to the console 
    if(isValid == true){
        for(x = 0; x < form.length; x++){
        console.log(form[x].id + ":" +form[x].value);
        console.log(isValid);
    }
    }
    console.log(isValid);
    return isValid;
}


/* Login Page */

const loginForm = document.getElementById('#login-form');
const loginBtn = document.getElementById('#login-btn');

function Login(){
    // Validate the credentials
    let validLogin = true;
    // Link  to the proper page when server side validation is completed
    if(validLogin == true){
        location.href = "dashboard.html";
    }
}

function DeleteAccount(){
    
}
// Script for Dashboard and sending data to server
const date = new Date().toLocaleDateString();
document.getElementById("current-date").innerHTML = date;
console.log();
