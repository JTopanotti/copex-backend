var express = require('express');

module.exports = function(){
  var app = express();

  app.set('port', process.env.PORT || 3001);

  var usuarioRouter = require("../app/routes/usuario");
  var anexoRouter = require("../app/routes/anexo");

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.use('/usuario', usuarioRouter);
  app.use('/anexo', anexoRouter);

  app.use(express.static('./public'));

  return app;
};
