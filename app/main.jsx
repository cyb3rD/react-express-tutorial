var React = require('react');
var ReactDOM = require('react-dom');

console.log('Output from JSX');

var GroceryItemList = require('./components/groceryItemList.jsx');
var groceryItemStore = require('./stores/groceryItemStore.jsx');

var initialItems = groceryItemStore.getItems();

function render() {
  ReactDOM.render(
    <GroceryItemList items={initialItems} />,
    document.getElementById('app')
  );
}

groceryItemStore.onChange(function(items) {
  initialItems = items;
  render();
});

render();


