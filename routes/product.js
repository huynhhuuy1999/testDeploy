var express = require('express');
var router = express.Router();
const controller = require("../controllers/product.controller");

/* GET users listing. */
router.get('/', controller.getProduct);

module.exports = router;