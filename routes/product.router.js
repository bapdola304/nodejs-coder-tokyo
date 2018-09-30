var express = require('express');
var router = express.Router();
var db = require('../db.js');

var controller = require('../controllers/product.controller');


router.get('/', controller.index);

router.get('/create',controller.create);
router.post('/create', controller.postCreate);
module.exports = router;