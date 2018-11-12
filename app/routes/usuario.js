var express = require('express');
var router = express.Router();
var controller = require("../controllers/usuario");

router.get("/list", controller.list);


module.exports = router;
