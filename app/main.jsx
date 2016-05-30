var React = require('react');
var ReactDOM = require('react-dom');

console.log('Output from JSX');

var GroceryItemList = require('./components/groceryItemList.jsx');

var initialItems = [{
  name: "Icecream"
},{
  name: "Cheeseburger",
  purchased: true
},{
  name: "Snarks"
}];

ReactDOM.render(
  <GroceryItemList />,
  document.getElementById('app')
);