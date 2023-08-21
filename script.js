// Assignment code here



function generatePassword() {

  // Criteria Selection

  // Password length:
  var pwordLength = prompt("Please enter password length. (Must be between 8 and 128)");
  
  // Validate input - must be a number
  if (typeof(pwordLength) !== "number") {
    alert("Please input how many characters you want your password to have as a number.");
    return "Invalid password. Try again.";
  // Validate input - must be between 8 and 128
  } else if (pwordLength < 8) {
    alert("Password must be 8 characters or longer.");
    return "Invalid password. Try again.";
  } else if (pwordLength > 128) {
    alert("Password length can be up to 128 characters.");
    return "Invalid password. Try again.";

  // Continue to character type selection
  } else {
    // -Lowercase
    var lowerCaseYN = confirm("Do you want your password to include lowercase characters?");
    
    // -Uppercase
    var upperCaseYN = confirm("Do you want your password to include uppercase characters?");

    // -Numeric
    var numericYN = confirm("Do you want your password to include numeric characters?");

    // -Special
    var specialYN = confirm("Do you want your password to include special characters?");

    // Validate input: at least one character type
    if (lowerCaseYN == false && upperCaseYN == false && numericYN == false && specialYN == false) {
      alert("Please choose at least one character type for your password.");
      return "Invalid password. Try again."
    } else if (lowerCaseYN == true)
    

  var generatedPassword = 


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

