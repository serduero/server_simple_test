// exportamos la función getTweetRequest para que pueda ser usada por el tweetRequestRoutes.js
exports.getTweetRequest = function(req, res) {
    // Buscamos el objeto tweetRequest en el array que creamos más abajo y lo devolvemos en formato JSON
    var tweetRequest = postedTweets.find(postedTweets => postedTweets.id === req.params.tweetRequestId);
    res.json(tweetRequest);
  };
