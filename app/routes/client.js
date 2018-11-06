var express = require('express');
var router = express.Router();
var controller = require("../controllers/client");

router.get("/list", controller.listClients);
//router.post("/register", controller.registerClient);

module.exports = router;
