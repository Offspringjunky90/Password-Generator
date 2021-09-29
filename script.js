// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

var passwordLength = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var upperCase = confirm("Would you like to use uppercase letters?");
var lowerCase = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!upperCase && !lowerCase && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

window.addEventListener('load', function() {
  generatePassword();
});

function generatePassword() {
  var password = "";

  var allowed = {};
  if (upperCase) password += rando(allowed.upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowersCase) password += rando(allowed.lowerCase = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







