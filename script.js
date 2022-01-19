// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Generator Returns - https://net-comber.com/charset.html

function generatePassword() {
  var newPassword = "";
  var characters = parseInt(
    prompt(
      "How many characters would you like for your password to contain?",
      "min 8, max 128"
    )
  );
  var lowercase = confirm(
    "Click OK to confirm including lowercase letters in your password."
  );
  var uppercase = confirm(
    "Click OK to confirm including uppercase letters in your password."
  );
  var numbers = confirm(
    "Click OK to confirm including numbers in your password."
  );
  var special = confirm(
    "Click OK to confirm including special characters in your password."
  );

  //asks user how many characters to generate for password & shows user length
  //sets input field criteria between 8 and 128 characters in length & gives alert if violated
  if (characters < 8 || characters > 128 || characters == null) {
    alert("Please enter character length between 8 and 128.");
  }
  //Looping until chosen characters length has been met
  for (var i = 0; i < characters; i++) {
    // Displays generated password to user out of 26 lowercase Browser letters
    // Concatenates newPassword variable with chosen conditions
    if (lowercase == true) {
      newPassword += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    // Displays generated password to user out of 26 uppercase Browser letters

    if (uppercase == true) {
      newPassword += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    if (numbers == true) {
      newPassword += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    if (special == true) {
      const special = "!@#$%^&*+<>/,.";
      newPassword += special[Math.floor(Math.random() * special.length)];
    }
  }
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// var characters = characters.value;
// var lowercase = lowercase.value;
// var uppercase = uppercase.value;
// var numbers = numbers.value;
// var special = special.value;
