// server.js

var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api/api.js');

var app = express();
app.set('port', (process.env.PORT || 3000));
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

var server = app.listen(app.get('port'), function () {
  console.log('Example app listening at port' + app.get('port'));
});
