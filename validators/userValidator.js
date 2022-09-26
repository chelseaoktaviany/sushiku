const { check, validationResult } = require("express-validator");

const flash = require("connect-flash");

exports.validateUser = [
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Username cannot be empty!")
    .bail()
    .exists()
    .withMessage("Username is already taken!")
    .bail(),
  check("email")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Invalid email address!")
    .bail()
    .exists()
    .withMessage("E-mail address is already in use!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //danger message
      req.session.sessionFlash = {
        type: "danger",
        messageType: "Warning!",
        message: "Please fill the following fields",
      };
      res.redirect("/register?=failedEmptyField");
    } //else if (!errors.exists()) {
    //danger message
    //   req.session.sessionFlash = {
    //     type: "danger",
    //     messageType: "Warning!",
    //     message: "A user with that email or name is already taken",
    //   };
    //   res.redirect("/register?=failedUserTaken");
    // }
    next();
  },
];
