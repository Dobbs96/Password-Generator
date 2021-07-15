// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateBtnNO = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var noPassword = generateNoPassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = noPassword;
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtnNO.addEventListener("click", writePassword);

// quick tpyed vars
var num = "0123456789";
var lc = "abcdefghijklmnopqrstuvwxyz";
var special = "`~!@#$%^&*()_+-=[]}|;'/.,?><";

// create vars used to find value
var numbers = num.split("");
var lowercase = lc.split("");
var specialCharacters = special.split("");
var uppercase = lc.toUpperCase().split("");

//    working
console.log(numbers);
console.log(lowercase);
console.log(specialCharacters);
console.log(uppercase);

// vars for messages on windows screen
var ok;
var confirmLowercase;
var confirmUppercase;
var confirmSpecialCharacters;
var confirmNumber;
// need a choice selector
var choice;

function generateNoPassword() {
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
    choice = alert("You must selected a criteria!");
  }
  // Adding no password text.
  var noPass = "Try Again";

  document.getElementById("password").textContent = noPass;
}

// End
// of
// noPassword

function generatePassword() {
  // if 1 selected

  // if 2 selected

  // if 3 selected

  // if 4 all four selected
  if (
    confirmLowercase &&
    confirmUppercase &&
    confirmSpecialCharacters &&
    confirmNumber
  ) {
    var choice = lowercase.concat(uppercase, specialCharacters, numbers);
    console.log(choice);
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
  }
  // setting space for password Input
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
  // inserts copy to text Content
  function UserInput(copy) {
    document.getElementById("password").textContent = copy;
  }
}
