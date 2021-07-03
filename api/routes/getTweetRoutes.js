module.exports = function(app) {
    // tweetRequestController tendrá la lógica de devolver el dato buscado en su función getTweetRequest
    var tweetRequestController = require('../controllers/tweetRequestController');
  
    // la ruta /tweetRequest vamos a estar esperando una request de tipo GET con un parámetro de tipo tweetRequestId
    app.route('/tweetRequest/:tweetRequestId')
      .get(tweetRequestController.getTweetRequest);
  };