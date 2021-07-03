// exportamos la función deleteTweetRequest - se elimina el TweetRequest con la función filter
// y se obtiene como respuesta el total del array sin ese elemento
exports.deleteTweetRequest = function(req, res) {
    postedTweets = postedTweets.filter(function(tweet) {
        return tweet.id != req.params.tweetDeleteId;
      });
      res.json(postedTweets);
  }