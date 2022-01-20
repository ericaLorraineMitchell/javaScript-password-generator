// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var newPassword = "";
  var characterOptions = [];
  var characterInput = parseInt(
    prompt(
      "How many characters would you like for your password to contain?",
      "min 8, max 128"
    )
  );
  var lowercase = confirm(
    "Click OK to include lowercase letters in your password."
  );
  var uppercase = confirm(
    "Click OK to include uppercase letters in your password."
  );
  var numbers = confirm("Click OK to include numbers in your password.");

  var special = confirm(
    "Click OK to include special characters in your password."
  );

  //Asks user how many characterInput to generate for password & shows user length
  //Sets input field criteria between 8 and 128 characterInput in length & gives alert if violated
  if (characterInput < 8 || characterInput > 128 || characterInput == false) {
    alert("Please enter character length between 8 and 128.");
  }

  if (
    lowercase == false &&
    uppercase == false &&
    numbers == false &&
    special == false
  ) {
    alert("Please start over and chose at least one password option.");
  }
  //pushes newPassword variable with chosen conditions
  if (lowercase) {
    characterOptions.push("abcdefghijklmnopqrstuzwxyz");
  }

  if (uppercase) {
    characterOptions.push("ABCDEFGHIJKLMONOPQRSTUVWXYZ");
  }

  if (numbers) {
    characterOptions.push("0123456789");
  }

  if (special) {
    characterOptions.push("!@^&*?#$%/+");
  }

  var formatted = characterOptions.join("").split("");

  //Looping until chosen characterInput length has been met
  for (var i = 0; i < characterInput; i++) {
    newPassword += formatted[Math.floor(Math.random() * formatted.length)];
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
