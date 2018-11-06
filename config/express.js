var express = require('express');

module.exports = function(){
  var app = express();

  app.set('port', process.env.PORT || 3001);

  var clientRouter = require("../app/routes/usuario");

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.use('/usuario', clientRouter);

  app.use(express.static('./public'));

  return app;
};
