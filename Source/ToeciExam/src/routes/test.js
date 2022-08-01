const express = require("express");
const router = express.Router();
const testController = require("../app/controllers/testcontroller");

router.get("/part:part", testController.showPart);
router.get("/part:part/test:test", testController.showPartTest);
router.post("/part:part/test:test", testController.markExam);

router.get("/", testController.showTest);


module.exports = router;
