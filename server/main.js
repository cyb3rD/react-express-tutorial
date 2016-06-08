var express = require('express');
var parser = require('body-parser');

var app = new express();

app.get('/', function(req, res) {
  res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(3000);

app.use(parser.json()); // Handle JSON
app.use(parser.urlencoded({extended:false})); //Handle POST request

require('./routes/items.js')(app);