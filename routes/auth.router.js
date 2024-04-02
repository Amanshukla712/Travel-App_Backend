const express = require("express");
const loginHandler = require("../controller/loginController");
const signupHandler = require("../controller/signupController");
const router = express.Router();


router.route("/register")
    .post(signupHandler);

router.route("/login")
    .post(loginHandler)

module.exports = router;