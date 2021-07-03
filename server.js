var express = require('express'),
  app = express(),
  port = process.env.PORT || 1000,
  bodyParser = require('body-parser');

global.postedTweets = [];  // Variable global donde guardaremos todos los tweets

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// todos los métodos get
var getRoutes = require('./api/routes/getTweetRoutes');
getRoutes(app);

// todos los métodos post
var postRoutes = require('./api/routes/postTweetRoutes');
postRoutes(app);

// todos los métodos delete
var deleteRoutes = require('./api/routes/deleteTweetRoutes');
deleteRoutes(app);

app.listen(port);

console.log('Servidor ser arrancado en puerto: ' + port);