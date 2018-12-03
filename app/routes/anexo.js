var express = require('express');
var router = express.Router();
var controller = require("../controllers/anexo");
var multer = require("multer");
var upload = multer({dest: "anexos/"});

router.get("/listar", controller.listar);
router.post("/salvar", upload.single('file'), controller.salvar);


module.exports = router;
