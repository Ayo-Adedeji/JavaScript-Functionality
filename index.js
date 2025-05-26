const form = document.querySelector("form")
const email = document.querySelector(".email")
const password = document.querySelector(".password");
const button = document.querySelector(".login");

const correctEmail = "appclick@gmail.com";
const correctPassword = "1234AppClick";

form.addEventListener("submit", function(event) {
event.preventDefault();

const emailValue = email.value 
const passwordValue = password.value 

if (emailValue === correctEmail && passwordValue === correctPassword ){
    alert("Login successful");
} else {
    alert("Incorrect username or password, Please try again.");
}
})