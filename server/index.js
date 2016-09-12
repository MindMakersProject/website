var express= require('express');
var path = require('path');

var app = express();

var static_path = path.join(__dirname, './../dist');

app.use(express.static(static_path));

app.get('/', function(req, res) {
  res.render('index');
});

var port = process.env.PORT || 5000
var localhost = process.host().address || localhost;
app.listen(port, function() {
	console.log('were running at http://' + localhost + port);
});