module.exports = function(app) {
  var postedTweetController = require('../controllers/tweetPostedController');

  app.route('/postedTweet')
    .post(postedTweetController.createPostedTweet);
};