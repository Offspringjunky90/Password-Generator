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
var options = generatePasswordOptions();



// Write password to the #password input
window.onload = alert("Please click 'Generate Password' to begin");

function generatePasswordOptions() {
  let confirmLength = prompt("How many characters would you like your password to be?");

  if (confirmLength < 8 || confirmLength > 128) {
  alert("Length must be 8-128 characters. How many characters would you like your password to be?");
  return;
  }

  confirmUpperCase = confirm("Would you like to use uppercase letters?");
  confirmLowerCase = confirm("Would you like to use lowercase letters?");
  confirmNumbers = confirm("Would you like to use numbers?");
  confirmSymbols = confirm("Would you like to use special characters?");

  if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSymbols) {
  alert("Please select at least one character");
  return;
  }

  var passwordOptions = {
    confirmLength,
    passwordUpperCase: confirmUpperCase,
    passwordLowerCase: confirmLowerCase,
    passwordNumbers: confirmNumbers,
    passwordSymbols: confirmSymbols,
  }

  return passwordOptions;
}

function generatePassword () {
  var options = generatePasswordOptions();
  console.log(options);

  passwordArray = [];
  console.log(passwordArray);

  if (options.passwordUpperCase) {
    for (i = 0; i < passwordUpperCase.length; i++) {
      passwordArray.push(passwordUpperCase[i]);
    }
  }
  if (options.passwordLowerCase) {
    for (i = 0; i < passwordlowerCase.length; i++) {
      passwordArray.push(passwordLowerCase[i]);
    }
  }
  if (options.passwordNumbers) {
    for (i = 0; i < passwordNumbers.length; i++) {
      passwordArray.push(passwordNumbers[i]);
    }
  }
  if (options.passwordSymbols) {
    for (i = 0; i < passwordSymbols.length; i++) {
      passwordArray.push(passwordSymbols[i]);
    }
  }
}

var finalPassword = [];

for (let i = 0; i < options.length; i++) {
  var randomPasswordPick = Math.floor(Math.random() * Math.floor(passwordArray.length));
  finalPassword.push(passwordArray[randomPasswordPick])
}

console.log(finalPassword);

var finalFinalPassword =finalPassword.join("");

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
 // let pH = document.querySelector("#password");
  generatePasswordOptions();
  document.getElementById("placeholder").textContent = finalFinalPassword;
});











// alert("Please select at least one character");
    //confirmUpperCase = confirm("Would you like to use uppercase letters?");   
    //confirmLowerCase = confirm("Would you like to use lowercase letters?");
    //confirmNumbers = confirm("Would you like to use numbers?");    
    //confirmSymbols = confirm("Would you like to use special characters?");
     
  //if (confirmLength < 8 || confirmLength > 128) {
    //    alert("Length must be 8-128 characters. How many characters would you like your password to be?");
     // confirmLength = prompt("How many characters would you like your password to contain?");
     // confirmUpperCase = confirm("Would you like to use uppercase letters?");
     // confirmLowerCase = confirm("Would you like to use lowercase letters?");
     // confirmNumbers = confirm("Would you like to use numbers?");    
     // confirmSymbols = confirm("Would you like to use special characters?");
     // }
//}

  //  if (confirmUpperCase) {
    //  passwordCharacters = passwordCharacters.concat(passwordUpperCase)
    //}

    //if (confirmLowerCase) {
      //passwordCharacters = passwordCharacters.concat(passwordLowerCase)
    //}

    //if (confirmNumbers) {
      //passwordCharacters = passwordCharacters.concat(passwordNumbers)
    //}
      
    //if (confirmSymbols) {
      //passwordCharacters = passwordCharacters.concat(passwordSymbols)
    //}

//console.log(passwordCharacters)
      
  //for (var i = 0; i < confirmLength; i++) {
    //    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        //console.log(randomPassword)
      //}
      //return randomPassword;
   // }/


  
