// crea los PostedTweet a partir del último id que encuentra en el array postedTweets (si no encuentra usa 1 como primer id)
// y usa los valores req.body.tweet_request_id y req.body.tweet_id para crear objeto de tipo JSON e insertarlo en el array
exports.createPostedTweet = function(req, res) {
    const maxPostedTweetId =
      Math.max(...postedTweets.map(postedTweet => postedTweet.id));
    var postedTweetId = isFinite(maxPostedTweetId) ? maxPostedTweetId + 1 : 1;
    var postedTweet = {
      id: postedTweetId.toString(),
      nickname: req.body.nickname,
      message: req.body.message
    };
    postedTweets.push(postedTweet);

    // Como respuesta devuelve todo el array para asegurarnos de que fue insertado
    res.json(postedTweets);
  };