var React = require('react');
var action = require('./../actions/groceryItemActionCreator.jsx');

module.exports = React.createClass({
  togglePurchased: function (e) {
    e.preventDefault();

    if(this.props.item.purchased) {
      action.unbuy(this.props.item);
    } else {
      action.buy(this.props.item);
    }

  },

  delete: function (e) {
    e.preventDefault();
    action.delete(this.props.item);
  },

  render: function () {
    return (
      <div className="grocery-item">
        <div className="item-name">
          <div className={this.props.item.purchased ? "strikethrough" : ""}>
            {this.props.item.name}
          </div>
        </div>

          <button className={this.props.item.purchased ? "btn-unbuy" : "btn-buy"} onClick={this.togglePurchased}>
            {this.props.item.purchased ? "Unbuy" : "Buy"}
          </button>

          <button onClick={this.delete}>&times;</button>

      </div>
    )
  }
});