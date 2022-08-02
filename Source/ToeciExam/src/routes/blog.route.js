const express = require("express");
const blogcontroller = require("../app/controllers/blogcontroller");
const router = express.Router();

router.get("/", blogcontroller.showBlog);

module.exports = router;
