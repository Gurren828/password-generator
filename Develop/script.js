// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@","#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "[", "", "]", " ^ ", "_", "`", "{", "}", "|", "~"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var confirmLength;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;
var choices;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {
  confirmLength= parseInt(prompt("How many characters would you like in yur new password?" +"\n" + "You must choose between a minimum of 8 characters and a maximum of 128 characters."));
  if (confirmLength < 8 || confirmLength > 128){
    confirmLength = parseInt(prompt("You must choose between a minimum of 8 characters and a maximum of 128 characters."));
  } else{
    confirmNumber = confirm("Do you want this password to contain numbers?");
    confirmUpper = confirm("Do you want this password to contain uppercase letters?");
    confirmLower = confirm("Do you want this password to contain lowercase letters");
    confirmSpecial = confirm("Do you want this password to contain special characters?");
  };
  if (!confirmNumber && !confirmUpper && !confirmLower && !confirmSpecial){
    choices = alert("You did not select any character types");
  }
  else if (confirmNumber && confirmUpper && confirmLower && confirmSpecial){
    choices = character.concat(number, upper, lower, special);
  }
  else if (confirmNumber && confirmUpper && confirmLower){
    choices = character.concat(number, upper, lower);
  }
  else if (confirmNumber && confirmUpper && confirmSpecial){
    choices = character.concat(number, special, upper);
  }
  else if (confirmNumber && confirmLower && confirmSpecial){
    choices = character.concat(number, special, lower);
  }
  else if (confirmUpper && confirmLower && confirmSpecial){
    choices = character.concat(upper, lower, special);
  }
  else if (confirmNumber && confirmUpper){
    choices = character.concat(number, upper);
  }
  else if (confirmNumber && confirmLower){
    choices = character.concat(number, lower);
  }
  else if (confirmNumber && confirmSpecial){
    choices = character.concat(number, special);
  }
  else if (confirmUpper && confirmLower){
    choices = character.concat(upper, lower);
  }
  else if (confirmUpper && confirmSpecial){
    choices = character.concat(upper, special);
  }
  else if (confirmLower && confirmSpecial){
    choices = character.concat(lower, special);
  }
  else if (confirmNumber){
    choices = character.concat(number);
  }
  else if (confirmUpper){
    choices = character.concat(upper);
  }
  else if (confirmLower){
    choices = character.concat(lower);
  }
  else if (confirmSpecial){
    choices = character.concat(special);
  };
  var pass = [];
for (var i =0; i< confirmLength; i++){
  var pickChoices = choices[Math.floor(math.random() * choices.length)];
  pass.push(pickChoices);
  }
var password = pass.join("");
userInput(pass)
return pass;
}
function userInput(pass){
  document.getElementById("password").placeholder = pass;
}