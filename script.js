// Assignment code here



function generatePassword() {

  // Error message to be displayed in the password box whenever something goes wrong.
  const errorMessage = "Password generation failed. Please try again.";

  // Criteria Selection:

  // Password length:
  var pwordLength = prompt("Please enter password length. (Must be between 8 and 128)");
  // console.log(typeof(pwordLength));
  // console.log(isNaN(pwordLength));
  
  // Validate input - must be a number between 8 and 128
  if (isNaN(pwordLength) || pwordLength < 8 || pwordLength > 128) {
    alert("Please enter your password length as a number between 8 and 128.");
    return errorMessage;

  // Continue to character type selection
  } else {
    // -Lowercase
    var lowerCaseYN = confirm("Do you want your password to include lowercase characters?\n(Click OK for ''Yes'' and Cancel for ''No'')");
    
    // -Uppercase
    var upperCaseYN = confirm("Do you want your password to include uppercase characters?");

    // -Numeric
    var numericYN = confirm("Do you want your password to include numeric characters?");

    // -Special
    var specialYN = confirm("Do you want your password to include special characters?");
  }

    // Validate input: at least one character type
    if (lowerCaseYN == false && upperCaseYN == false && numericYN == false && specialYN == false) {
      alert("Please choose at least one character type for your password.");
      return errorMessage;
    }

    // Determine what rows of the range matrix to use
    var rowSelect = [];

    if (lowerCaseYN == true) {
      rowSelect.push(0);
    }
    if (upperCaseYN == true) {
      rowSelect.push(1);
    }
    if (numericYN == true) {
      rowSelect.push(2);
    }
    if (specialYN == true) {
      rowSelect.push(3);
    }
    // console.log(rowSelect);

  // String containing all possible characters that will be indexed in the for loop
  allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]},<.>/?;: \\";

  // Matrix containing minimums and maximums defining ranges of numbers that can be used to index the allChars string
  // The arrays of this matrix will be randomly selected excluding all the arrays not chosen by the user
  // Using the randomly selected array, a number will be randomly generated, and this number will be used to index the allChars string
  const possibleRanges = [[0,25],[26,51],[52,61],[62,91]];
  
  // Create a placeholder empty password
  var generatedPassword = "";

  // For loop that assigns each character in password
  for (var i=1; i <= pwordLength; i++) {

    // Choose the range of the index from possibleRanges randomly from the given list of possible rows
    var randomRow = rowSelect[Math.floor(Math.random() * rowSelect.length)];

    // Create a range of characters within the allChars string based on the randomly selected range
    var min = Math.ceil(possibleRanges[randomRow][0]);
    var max = Math.floor(possibleRanges[randomRow][1]);

    // Make a random index number from the max and min that fits within the selected criteria
    randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

    // Use that random index number to select a character from allChars and add it to the password
    generatedPassword += allChars[randomIndex];

  }

  return generatedPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

