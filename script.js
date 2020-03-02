// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "-", ":","<",">","=", "?", "[", "]", "/"];
var passStip;
var password;


function generatePassword() {
  var passLength = prompt("How many characters between 8 and 128 would like your password to be?");
  if (passLength < 8 || passLength > 128) {
    alert("Please select a number between 8 and 128");
    return;
  }
  var upper = confirm("Do you need UPPERcase letters in your password?");
  if (upper === true) {
    passStip = (upperCase);
    console.log(passStip);
  } else if(upper === false) {
    upperCase = null;
    passStip = [];
  }

  var lower = confirm("Do you need LOWERcase letters in your password?");
  if (lower === true) {
    passStip = (passStip.concat(lowerCase));
    console.log(passStip);
  } else if(lower === false) {
    lowerCase = null;
  }

  var numbers = confirm("Do you need NUMBERS in your password?");
  if (numbers === true) {
    passStip = (passStip.concat(numerals));
    console.log(passStip);
  } else if(numbers === false) {
    numerals = null;
  }

  var special = confirm("Do you need SPECIAL CHARACTERS in your password?");
  if (special === true) {
    passStip = (passStip.concat(specialCharacters));
    console.log(passStip);
  } else if(specialCharacters === false) {
    specialCharacters = null;
  }

  if(upper + lower + numbers + special === false) {
    alert("You did not select at least one of the criteria options. Please try again.");
    
  }


  password = ("");
  

  for (var i = 0; i < passLength; i++) {
    password = password + passStip [Math.floor(Math.random() * passStip.length)];
    
  }
  
}


function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.getElementById("password").innerHTML = password;
  

}

generateBtn.addEventListener("click", writePassword);
