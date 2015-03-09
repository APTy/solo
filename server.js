var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/api', function (req, res) {

  console.log(req.body);
  res.end();
});


//
// var api = 'https://readability.com/api/content/v1/parser';
// // var url = 'http://blog.readability.com/2011/02/step-up-be-heard-readability-ideas/';
// var token = config.readabilityToken;
// var data = {
//   'Content-Type': 'application/json',
//   // url: url,
//   token: token
// };



var server = app.listen(3000, function () {
  console.log('Example app listening at port 3000');
});
