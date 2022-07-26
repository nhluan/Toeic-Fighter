var express = require('express');
var router = express.Router();
const SiteController = require('../app/controllers/homecontroller.js');

router.get('/', SiteController.index);
router.get('/signup', SiteController.sigup);


module.exports = router;