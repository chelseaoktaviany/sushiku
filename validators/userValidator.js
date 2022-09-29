const { check, validationResult } = require("express-validator");

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
    // next();
  },
];
