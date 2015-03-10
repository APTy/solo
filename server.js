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
  api.getReadability(req.body.url, function(data) {
    res.send(data);
  });
});

app.get('/news', function (req, res) {
  api.getNews(function(data) {
    res.send(data);
  });
});

var server = app.listen(3000, function () {
  console.log('Example app listening at port 3000');
});
