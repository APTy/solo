// api.js

var request = require('request');
var config = require('../env/config.js');

exports.getReadability = function(url, cb) {
  var api = 'https://readability.com/api/content/v1/parser';
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

exports.getNews = function(cb) {
  var token = config.usaToken;
  var uri = 'http://api.usatoday.com/open/articles/topnews/home?count=10&days=0&page=0&encoding=json&api_key=' + token;
  request({
      uri: uri,
      method: "GET",
      timeout: 10000
    }, function(err, res, body) {
      var data = JSON.parse(body);
      cb(data);
    });
};
