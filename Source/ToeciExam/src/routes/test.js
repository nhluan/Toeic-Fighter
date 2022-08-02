const express = require("express");
const router = express.Router();
const testController = require("../app/controllers/testcontroller");
const auth = require("../app/middlewares/auth.middleware");

router.get("/part:part", auth.restrict,testController.showPart);
router.get("/part:part/test:test",auth.restrict, testController.showPartTest);
router.post("/part:part/test:test", testController.markExam);

router.get("/", auth.restrict, testController.showTest);
//router.post("/signup", authController.signup);
//router.post("/signout", authController.signout);

module.exports = router;
