var express = require('express');

var app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

console.log("variable entorno port:" + process.env.PORT);

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

app.get('/', (request, response) => { return response.send('Ping!'); }); // para saber si ya está corriendo

app.listen(port);

console.log('Servidor ser arrancado en puerto: ' + port);