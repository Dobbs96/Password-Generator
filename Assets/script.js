// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// quick tpyed vars
var num = "0123456789";
var lc = "abcdefghijklmnopqrstuvwxyz";
var special = "`~!@#$%^&*()_+-=[]}|;'/.,?><";

// create vars used to find value
var numbers = num.split("");
var lowercase = lc.split("");
var specialCharacters = special.split("");
var uppercase = lc.toUpperCase().split("");

// //    working
// console.log(numbers);
// console.log(lowercase);
// console.log(specialCharacters);
// console.log(uppercase);

// vars for messages on windows screen
var ok;
var confirmLowercase;
var confirmUppercase;
var confirmSpecialCharacters;
var confirmNumber;
// need a choice selector
var choice;

// function generateNoPassword() {}

// // End
// // of
// // noPassword

function generatePassword() {
  // 1
  confirmLowercase = confirm("Will it contain Lowercase letters?");
  // 2
  confirmUppercase = confirm("Will it contain Uppercase letters?");
  // 3
  confirmSpecialCharacters = confirm("Will it contain Special Characters?");
  // 4
  confirmNumber = confirm("Will it contain Numbers?");

  // if 1,2,3,4 are cancelled
  if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmSpecialCharacters &&
    !confirmNumber
  ) {
    choice = alert("***You must selected a criteria!***");
    // redo
    generatePassword();
  }
  // if 4 all four selected
  else if (
    confirmLowercase &&
    confirmUppercase &&
    confirmSpecialCharacters &&
    confirmNumber
  ) {
    var choice = lowercase.concat(uppercase, specialCharacters, numbers);
    //// works
    // console.log(choice);
  }
  // if 1 selected
  else if (
    confirmLowercase &&
    !confirmUppercase &&
    !confirmSpecialCharacters &&
    !confirmNumber
  ) {
    choice = lowercase;
  } else if (
    !confirmLowercase &&
    confirmUppercase &&
    !confirmSpecialCharacters &&
    !confirmNumber
  ) {
    choice = uppercase;
  } else if (
    !confirmLowercase &&
    !confirmUppercase &&
    confirmSpecialCharacters &&
    !confirmNumber
  ) {
    choice = specialCharacters;
  } else if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmSpecialCharacters &&
    confirmNumber
  ) {
    choice = numbers;
  }
  // if 2 selected
  else if (
    confirmLowercase &&
    confirmUppercase &&
    !confirmSpecialCharacters &&
    !confirmNumber
  ) {
    choice = lowercase.concat(uppercase);
  } else if (
    confirmLowercase &&
    !confirmUppercase &&
    confirmSpecialCharacters &&
    !confirmNumber
  ) {
    choice = lowercase.concat(specialCharacters);
  } else if (
    confirmLowercase &&
    !confirmUppercase &&
    !confirmSpecialCharacters &&
    confirmNumber
  ) {
    choice = lowercase.concat(numbers);
  } else if (
    !confirmLowercase &&
    confirmUppercase &&
    confirmSpecialCharacters &&
    !confirmNumber
  ) {
    choice = uppercase.concat(specialCharacters);
  } else if (
    !confirmLowercase &&
    confirmUppercase &&
    !confirmSpecialCharacters &&
    confirmNumber
  ) {
    choice = uppercase.concat(numbers);
  } else if (
    !confirmLowercase &&
    !confirmUppercase &&
    confirmSpecialCharacters &&
    confirmNumber
  ) {
    choice = specialCharacters.concat(numbers);
  }
  // if 3 selected
  else if (
    confirmLowercase &&
    confirmUppercase &&
    confirmSpecialCharacters &&
    !confirmNumber
  ) {
    choice = lowercase.concat(uppercase, specialCharacters);
  } else if (
    confirmLowercase &&
    confirmUppercase &&
    !confirmSpecialCharacters &&
    confirmNumber
  ) {
    choice = lowercase.concat(uppercase, numbers);
  } else if (
    confirmLowercase &&
    !confirmUppercase &&
    confirmSpecialCharacters &&
    confirmNumber
  ) {
    choice = lowercase.concat(specialCharacters, numbers);
  } else if (
    !confirmLowercase &&
    confirmUppercase &&
    confirmSpecialCharacters &&
    confirmNumber
  ) {
    choice = uppercase.concat(specialCharacters, numbers);
  }
  ok = parseInt(
    prompt(
      "How many characters would you like your password? *Please choose between 8 and 128*"
    )
  );
  if (!ok) {
    alert("Please try again.");
  } else if (ok < 8 || ok > 128) {
    alert("Value must be between 8 and 128!");
    // redo
    generatePassword();
  }
  // setting space for password Input
  else {
    var password = [];
    // Adding vars up for Input value 8-128
    for (var i = 0; i < ok; i++) {
      var pickChoices = choice[Math.floor(Math.random() * choice.length)];
      password.push(pickChoices);
    }

    // copying password space to answer from random choice
    var copy = password.join("");
    //
    UserInput(copy);
    // shows copy
    return copy;
  }
  // inserts copy to text Content
  function UserInput(copy) {
    document.getElementById("password").textContent = copy;
  }
}
