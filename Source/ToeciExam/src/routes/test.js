const express = require("express");
const router = express.Router();
const testController = require("../app/controllers/testcontroller");
const auth = require("../app/middlewares/auth.middleware");

// router.get("/part:part",  testController.showPart);
router.get("/part:part/test:test", testController.showPartTest);
router.get("/", auth.restrict, testController.showTest);


module.exports = router;
