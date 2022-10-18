//connect model
const User = require("../models/user");

const { validationResult } = require("express-validator");

const flash = require("connect-flash");

//function send email
/*
  function sendEmail(email, token) {
    var email = email;
    var token = token;

    var email = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        
      }
    });
  }  
*/

// homepage (index) (GET)
const home = async function (req, res) {
  await res.render("pages/index", {
    title: "SUSHIKU - Home",
  });
};

//signin page (GET)
const signIn = async function (req, res) {
  await res.render("pages/signin", {
    title: "SUSHIKU - Sign In",
  });
};

//register page (GET)
const registerForm = async function (req, res) {
  await res.render("pages/register", {
    title: "SUSHIKU - Register",
    sessionFlash: res.locals.sessionFlash,
  });
};

//forgottenpassword page (GET)
const forgottenPass = async function (req, res) {
  await res.render("pages/forgottenpassword", {
    title: "SUSHIKU - Forget Password",
  });
};

//saving user (POST)
const registerUser = async function (req, res) {
  //validate user input
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //danger message
    req.session.sessionFlash = {
      type: "danger",
      messageType: "Warning!",
      message: "Please fill the following fields",
    };
    res.redirect("/register?=failedEmptyField");
  } else {
    //creating a user
    const user = User.create({
      name,
      email,
      password,
    }).catch((error) => console.log(error));

    //success message
    req.session.sessionFlash = {
      type: "success",
      messageType: "Success!",
      message: "Thank you! Your account has been registered successfully",
    };

    console.log(user);

    //redirecting to register page successfully
    res.redirect("/register?=success");
  }
};

//resetpasswordemail (POST)
const resetPassEmail = async function (req, res) {
  //validate user input
  const { email } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //danger message
    req.session.sessionFlash = {
      type: "danger",
      messageType: "Warning!",
      message: "Please provide your email",
    };
    res.redirect("/forgottenpassword?=failedEmptyField");
  } else {
    //function sending an email for the link

    //success message
    req.session.sessionFlash = {
      type: "success",
      messageType: "Success!",
      message: "You have sent email for the reset password link.",
    };

    console.log("test password");

    //redirecting to register page successfully
    res.redirect("/forgottenpassword?=success");
  }
};

module.exports = {
  home,
  signIn,
  registerForm,
  forgottenPass,
  registerUser,
  resetPassEmail,
};
