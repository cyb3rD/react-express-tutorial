var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery', function() {
  console.log('Connected...');

  // Drop all data on restarting server (Dev purpose)
  mongoose.connection.db.dropDatabase();

  var items = [{
    name: "Icecream"
  },{
    name: "Cheeseburger",
    purchased: true
  },{
    name: "Snarks"
  },{
    name: "Candy"
  }];

  items.forEach(function(item) {
    new GroceryItem(item).save();
  })

});