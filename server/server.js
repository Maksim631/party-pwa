var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  Party = require('./models/party'),
  Category = require('./models/category'),
  port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes'); //importing route
routes(app);

app.listen(port);

console.log('Server is started ' + port);
