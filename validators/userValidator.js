const { check } = require("express-validator");

const flash = require("connect-flash");

exports.validateUser = [
  check("name", "This username must have at least 3 characters long")
    .exists()
    .isLength({ min: 3 }),
  check("email", "Email is not valid")
    .isEmail()
    .normalizeEmail()
    .exists()
    .withMessage("E-mail address is already in use!"),
];
