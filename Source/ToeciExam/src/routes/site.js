var express = require('express');
var router = express.Router();
const SiteController = require('../app/controllers/homecontroller.js');

router.get('/signup', SiteController.sigup);
router.get('/', SiteController.index);


module.exports = router;