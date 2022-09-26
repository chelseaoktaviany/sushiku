// /routes/index.js

"use strict";

const express = require("express");
const router = express.Router();

//validatoruser
const { validateUser } = require("../validators/userValidator");

//controller
const userController = require("../controllers/UserController");

//index page (session) (GET)
router.get("/", userController.home);

//signin page (GET)
router.get("/signin", userController.signIn);

//register page (GET)
router.get("/register", userController.registerForm);

//save user (POST)
router.route("/register").post(validateUser, userController.registerUser);

module.exports = router;
