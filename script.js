// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//allows me to see action is happening on button click
console.log("Clicked button.");  

//asks user how many characters to generate for password & shows user length
var characters = prompt ("How many characters would you like for your password to contain?", "min 8, max 128"); 
// var input = input.value;
// input = Number(input);
// sets input field criteria between 8 and 128 characters in length & gives alert if violated
if (characters > 8 || characters < 128 || number == null) {   
  alert("Please enter character length between 8 and 128.");
  // cancel button to start over
} 

var lowercase = confirm("Click OK to confirm including lowercase letters in your password.");
 if (lowercase == true) {
   //adds to password generated
 } 

var uppercase = confirm("Click OK to confirm including uppercase letters in your password."); {
  if (uppercase == true) {
    //adds to password generated
  }

  var numbers = confirm("Click OK to confirm including numbers in your password."); {
    if (numbers ==true) {
      //adds to password generated
    }

    var special = confirm("Click OK to confirm including special characters in your password."); {
      if (special == true) {
        //adds to password generated
      }
    }
  }
}
}


// var alerts = [lowercase, uppercase, numbers, special characters];
// alerts user to choose at least one criteria and starts alerts again

//

//displays generated password to user
// return "generated password appear here";  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
