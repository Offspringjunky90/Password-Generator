// Assignment Code
const generateBtn = document.querySelector("#generate");
let passwordUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let passwordLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let passwordNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let passwordSymbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
let confirmLength = "";
let confirmUpperCase;
let confirmLowerCase;
let confirmNumbers;
let confirmSymbols;
let passwordCharacters = [];
let randomPassword = "";


// Write password to the #password input
function generatePassword() {
  let confirmLength = prompt("How many characters would you like your password to be?");

  while(confirmLength <= 8 || confirmLength >= 128) {
      alert("Length must be 8-128 characters. How many characters would you like your password to be?");
      confirmLength = prompt("How many characters would you like your password to contain?");
      } 

      let confirmUpperCase = confirm("Would you like to use uppercase letters?");
      let confirmLowerCase = confirm("Would you like to use lowercase letters?");
      let confirmNumbers = confirm("Would you like to use numbers?");    
      let confirmSymbols = confirm("Would you like to use special characters?");

      while(confirmUpperCase === false && confirmLowerCase === false && confirmSymbols === false && confirmNumbers === false) {
        alert("Please select at least one character");
        confirmUpperCase = confirm("Would you like to use uppercase letters?");   
        confirmLowerCase = confirm("Would you like to use lowercase letters?");
        confirmNumbers = confirm("Would you like to use numbers?");    
        confirmSymbols = confirm("Would you like to use special characters?");
    } 


    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(passwordUpperCase)
    }

    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(passwordLowerCase)
    }

    if (confirmNumbers) {
      passwordCharacters = passwordCharacters.concat(passwordNumbers)
    }
      
    if (confirmSymbols) {
      passwordCharacters = passwordCharacters.concat(passwordSymbols)
    }

console.log(passwordCharacters)
      
  for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Add event listener to generate button
function writePassword() {
  password = generatePassword();
  alert(password)
}

function writePassword() {
  password = document.getElementById
}