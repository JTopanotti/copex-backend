var express = require('express');
var router = express.Router();
var controller = require("../controllers/perfil");

router.get("/listar", controller.listar);


module.exports = router;
