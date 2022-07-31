const express = require("express");
const router = express.Router();
const minitestController = require("../app/controllers/minitestcontroller");

router.get("/", minitestController.showMiniTest);
router.get("/part1", minitestController.showPart1);
//router.post("/signup", authController.signup);
//router.post("/signout", authController.signout);

module.exports = router;
