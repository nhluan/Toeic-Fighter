const express = require("express");
const router = express.Router();
const authController = require("../app/controllers/auth.controller");


router.get("/signup", authController.showSignup);
router.get("/signin", authController.showSignin);
router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.get("/signout", authController.signout);

//router.post("/signout", authController.signout);

module.exports = router;
