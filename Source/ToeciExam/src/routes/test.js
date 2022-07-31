const express = require("express");
const router = express.Router();
const testController = require("../app/controllers/testcontroller");

router.get("/part:part", testController.showPart);
router.get("/part:part/test:test", testController.showPartTest);

router.get("/", testController.showTest);
//router.post("/signup", authController.signup);
//router.post("/signout", authController.signout);

module.exports = router;
