console.log('Initializing Super Twitter Bot!');

var Twit = require('twit');

var tokens = require('./config');

var T = new Twit(tokens);

var params = {
  q: 'surfing',
  count: 2
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
  }
};
