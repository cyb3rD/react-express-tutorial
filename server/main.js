require('babel-register'); // Using babel to transform jsx
require('./database.js'); // DB methods

var express = require('express');
var parser = require('body-parser');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var GroceryItem = require('./models/GroceryItem.js');


var app = new express();

app.get('/', function(req, res) {
  // res.render('./../app/index.ejs', {});

  // Isomorphic - render on the server
  var application = React.createFactory(require('./../app/components/groceryItemList.jsx'));

  GroceryItem.find(function(err, doc) {
    var generated = ReactDOMServer.renderToString(application({
      items: doc
    }));

    res.render('./../app/index.ejs', {reactOutput: generated});
  })
})
.use(express.static(__dirname + '/../.tmp'))
.listen(3000);

app.use(parser.json()); // Handle JSON
app.use(parser.urlencoded({extended:false})); //Handle POST request

require('./routes/items.js')(app);