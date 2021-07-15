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

var num = "0123456789";
var lc = "abcdefghijklmnopqrstuvwxyz";
var special = "`~!@#$%^&*()_+-=[]}|;'/.,?><";

var numbers = num.split("");
var lowercase = lc.split("");
var specialCharacters = special.split("");
var uppercase = lc.toUpperCase().split("");

//    working
console.log(numbers);
console.log(lowercase);
console.log(specialCharacters);
console.log(uppercase);

password.addEventListener("click", function () {
  document.getElementById("password");
});

var ok;
var confirmLowercase;
var confirmUppercase;
var confirmSpecialCharacters;
var confirmNumber;

function generatePassword() {
  ok = parseInt(
    prompt(
      "How many characters would you like your password? *Please choose between 8 and 128*"
    )
  );
  if (!ok) {
    alert("Please try again.");
  } else if (ok < 8 || ok > 128) {
    alert("Value must be between 8 and 128");
  } else if (ok >= 8 || ok <= 128) {
    confirmLowercase = confirm("Will this contain numbers?");
    confirmUppercase = confirm("Will this contain special characters?");
    confirmSpecialCharacters = "Will this contain Uppercase letters?";
    confirmNumber = confirm("Will this contain Lowercase letters?");
  }
}
