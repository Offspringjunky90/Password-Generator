// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
    length = prompt("Please select your password length");
}

if (length < 8 && length > 128){
    alert("Password length must be between 8-128")
}

if (length >= 8 && length >= 128){
    var upperCase = confirm("Would you like to use uppercase letters?")
    var lowerCase = confirm("Would you like to use lowercase letters?")
}












// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
