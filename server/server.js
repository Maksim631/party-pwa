var path = require('path');
var fs = require('fs');
var https = require('https');

var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  Party = require('./models/party'),
  Category = require('./models/category'),
  port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./routes/routes'); //importing route
routes(app);

app.listen(port);

console.log('Server is started ' + port);

module.exports = app;
