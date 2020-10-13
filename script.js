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





// Array data
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","X"];
    numbChar = ["0","1","2","3","4","5","6","7","8","9"];
    symbChar = ["!","@","#","%","&","*","(",")","~"];

// Var Declarations
var whatLength = "";
    whatLower;
    whatUpper;
    whatNumber;
    whatSymbol;

// Main function
  function generatePassword () {
  whatLength = (prompt("How long would you like this, brah?"));
  
  // Loop if length parameters aren't met
  while (whatLength < 8 || whatLength > 128) {
    alert("password needs to be between 8-128 characters, brah");
    whatLength = (prompt("How long would you like this"));
  }
  // Password Parameters
  whatLower = confirm("Would you like to have lowercase letters?");
  whatUpper = confirm("Would you like to have uppercase letters?");
  whatNumber = confirm("Would you like to have numbers?")
  whatSymbol = confirm("Would you like to have symbols")

  // Loop if Password parameters aren't met
  while (whatLower === false && whatUpper === false && whatNumber === false && whatSymbol === false) {
    alert("You need at least something to characterize it, brah");
    whatLower = confirm("Would you like to have lowercase letters?");
    whatUpper = confirm("Would you like to have uppercase letters?");
    whatNumber = confirm("Would you like to have numbers?");
    whatSymbol = confirm("Would you like to have symbols");
  }

  // Password parameter concatenation
  psswChar = []
  
  if (whatLower) {
    psswChar = psswChar.concat(lowerChar);
  }
  
  if (whatUpper) {
    psswChar = psswChar.concat(upperChar)
  }

  if (whatNumber) {
    psswChar = psswChar.concat(numbChar)
  }

  if (whatSymbol) {
    psswChar = psswChar.concat(symbChar)
  }
  
  // Array randomization
  psswNew = ""

  for (var i = 0; i < whatLength; i++) {
    psswNew = psswNew + psswChar[Math.floor(Math.random() * psswChar.length)];
  }
  return psswNew;





}

console.log(generatePassword)






