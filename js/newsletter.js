const form = document.querySelector("#newsletterForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm(event) {
    event.preventDefault();

    if (validateEmail(email.value) === true) {
       emailError.style.display = "none";
    } else {
       emailError.style.display = "block";
    }
 }
 
 form.addEventListener("submit", validateForm);

function validateEmail(email) {
   const regEx = /\S+@\S+\.\S+/;
   const patternMatches = regEx.test(email);
   return patternMatches;
}