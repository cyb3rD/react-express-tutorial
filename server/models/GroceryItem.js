var mongoose = require('mongoose');

var GroceryItemsSchema = {
  name: String,
  purchased: Boolean,
  id: String
};

// Register schema
 var GroceryItem = mongoose.model('GroceryItem', GroceryItemsSchema, 'groceryItems');

module.exports = GroceryItem;

