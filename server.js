var express = require('express');
var bodyParser = require('body-parser');

var request = require('request');
var config = require('./env/config.js');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/api', function (req, res) {
  getReadability(req.body.url, function(data) {
    res.send(data);
  });
});


var getReadability = function(url, cb) {
  var api = 'https://readability.com/api/content/v1/parser';
  // var url = 'http://blog.readability.com/2011/02/step-up-be-heard-readability-ideas';
  var token = config.readToken;
  var uri = api + '?url=' + url + '&token=' + token;

  request({
      uri: uri,
      method: "GET",
      timeout: 10000
    }, function(err, res, body) {
      var data = JSON.parse(body);
      cb(data);
    });
};

var server = app.listen(3000, function () {
  console.log('Example app listening at port 3000');
});
