var express = require('express');
var router = express.Router();
var controller = require("../controllers/perfil");

router.get("/list", controller.list);


module.exports = router;
