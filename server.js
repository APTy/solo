// server.js

var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api/api.js');

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

app.get('/news', function (req, res) {
  getNews(function(data) {
    res.send(data);
  });
})


// var getReadability = function(url, cb) {
//   var api = 'https://readability.com/api/content/v1/parser';
//   // var url = 'http://blog.readability.com/2011/02/step-up-be-heard-readability-ideas';
//   var token = config.readToken;
//   var uri = api + '?url=' + url + '&token=' + token;
//
//   request({
//       uri: uri,
//       method: "GET",
//       timeout: 10000
//     }, function(err, res, body) {
//       var data = JSON.parse(body);
//       cb(data);
//     });
// };
//
// var getNews = function(cb) {
//   var uri = 'http://api.usatoday.com/open/articles/topnews/home?count=10&days=0&page=0&encoding=json&api_key=ch5b5vgs4h3wr4a93e3jasf7';
//   request({
//       uri: uri,
//       method: "GET",
//       timeout: 10000
//     }, function(err, res, body) {
//       var data = JSON.parse(body);
//       cb(data);
//     });
// };

getNews();

var server = app.listen(3000, function () {
  console.log('Example app listening at port 3000');
});
