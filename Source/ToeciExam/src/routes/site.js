var express = require('express');
var router = express.Router();
const SiteController = require('../app/controllers/home.controller.js');

router.get('/', SiteController.index);

module.exports = router;