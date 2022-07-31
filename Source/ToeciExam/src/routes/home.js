var express = require("express");
var router = express.Router();
const HomeController = require("../app/controllers/homecontroller.js");

router.get("/", HomeController.index);

module.exports = router;
