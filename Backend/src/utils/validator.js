
const validator = require("validator");

async function validUser(data) {
  const mandatoryFields = ["firstName", "emailId", "password"];

  // Check required fields exist
  const hasAllFields = mandatoryFields.every((k) => Object.keys(data).includes(k));
  if (!hasAllFields) throw new Error("Fields are missing");

  const { firstName, emailId, password } = data;

  // Validate name length
  if (!(firstName.length >= 3 && firstName.length <= 20)) {
    throw new Error("Name must be between 3 and 20 characters");
  }

  // Validate email
  if (!validator.isEmail(emailId)) {
    throw new Error("Enter a valid Email");
  }

  // Validate strong password
  if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a stronger Password");
  }

 
}

module.exports = validUser;
