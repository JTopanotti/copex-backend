var express = require('express');
var router = express.Router();
var controller = require("../controllers/usuario");

router.get("/listar", controller.listar);


module.exports = router;
