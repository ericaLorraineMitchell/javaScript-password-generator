// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  //Asks user how many characters to generate for password & shows user length
  //Sets input field criteria between 8 and 128 characters in length & gives alert if violated
  if (
    characters < 8 ||
    characters > 128 ||
    characters == null
    // || characters == false
  ) {
    alert("Please enter character length between 8 and 128.");
  }
  //Looping until chosen characters length has been met
  for (var i = 0; i < characters; i++) {
    //Password Generator Returns - https://net-comber.com/charset.html
    //Chooses random password out of 26 lowercase Browser letters
    //Concatenates newPassword variable with chosen conditions
    if (lowercase == true) {
      newPassword += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    if (uppercase == true) {
      newPassword += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    if (numbers == true) {
      newPassword += String.fromCharCode(Math.floor(Math.random() * 10) + 49);
    }

    if (special == true) {
      const special = "!@#$%^&*+<>/,.";
      newPassword += special[Math.floor(Math.random() * special.length)];
    }

    if (
      lowercase == false &&
      uppercase == false &&
      numbers == false &&
      special == false
    ) {
      alert("Please start over and chose at least one password option.");
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
