// Assignment Code
const generateBtn = document.querySelector("#generate");



// Write password to the #password input

let passwordLength = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

let upperCase = confirm("Would you like to use uppercase letters?");
let lowerCase = confirm("Would you like to use lowercase letters?");
let numbers = confirm("Would you like to use numbers?");
let symbols = confirm("Would you like to use special characters?");

while (!upperCase && !lowerCase && !numbers && !symbols) {
  alert("You must select at least one character type!");
  upperCase = confirm("Would you like to use uppercase letters?");
  lowerCase = confirm("Would you like to use lowercase letters?");
  numbersEl = confirm("Would you like to use numbers?");
  symbolsEl = confirm("Would you like to use special characters?");
}

function generatePassword() {
  var password = "";

  var allowed = {};
  if (upperCase) password += rando(allowed.upperCase = "ABCDEFGHIJKLMONPQRSTUVWXYZ");
  if (lowersCase) password += rando(allowed.lowerCase = "abcdefghijklmnopqrstuvwxyz");
  if (numbersEl) password += rando(allowed.numbers = "1234567890");
  if (symbolsEl) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  finalPassword = generatePassword();
  document.getElementById("password").placeholder = finalPassword;
});






