//connect model
const User = require("../models/user");

const flash = require("connect-flash");

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

//saving user (POST)
const registerUser = async function (req, res) {
  //validate user input
  const { name, email, password } = req.body;

  // if (!name || !email || !password) {
  //danger message
  //   req.session.sessionFlash = {
  //     type: "danger",
  //     messageType: "Warning!",
  //     message: "Please fill the following fields",
  //   };
  //   res.redirect("/register?=failedEmptyField");
  // }

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
};

module.exports = {
  home,
  signIn,
  registerForm,
  registerUser,
};
