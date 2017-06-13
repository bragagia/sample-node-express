/**
 * @author Léo Unbekandt
 */

var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  for (i = 0; i < 50; i++) {
    console.log("FAKE LOG " + i)
  }
  res.render('index', {});
})

app.get('/crash', function (req, res) {
  i_dont_exist();
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
