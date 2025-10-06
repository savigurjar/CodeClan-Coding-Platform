const validator = require("validator");

async function validUser(data) {
  const mandatoryFields = ["firstName", "emailId", "password"];

  // Check all required fields
  const hasAllFields = mandatoryFields.every((k) =>
    Object.keys(data).includes(k)
  );
  if (!hasAllFields) throw new Error("Fields are missing");

  const { firstName, emailId, password } = data;

  // --- Name validation ---
  if (!(firstName.length >= 3 && firstName.length <= 20)) {
    throw new Error("Name must be between 3 and 20 characters");
  }

  // --- Email validation ---
  if (!validator.isEmail(emailId)) {
    throw new Error("Enter a valid Email");
  }

  // --- Password validation ---
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    // STRICT MODE (production)
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      throw new Error(
        "Password must have at least 8 chars, 1 uppercase, 1 number, and 1 symbol"
      );
    }
  } else {
    // SIMPLE MODE (development)
    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }
  }

  return true; // validation passed
}

module.exports = validUser;
