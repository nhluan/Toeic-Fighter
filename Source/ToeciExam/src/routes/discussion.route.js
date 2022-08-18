const express = require("express");
const discussioncontroller = require("../app/controllers/discussionController");
const router = express.Router();

router.get("/", discussioncontroller.showDiscusion);

module.exports = router;
