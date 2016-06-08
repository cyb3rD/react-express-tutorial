module.exports = function(app) {
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

  app.route('/api/items')
  .get(function(req, res) {
    res.send(items);
  })
  .post(function(req, res) {
    var item = req.body;
    items.push(item);
  })
}


