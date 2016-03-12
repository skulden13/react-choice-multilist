var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render() {
    var listItems = this.props.items.map(function(item) {
      return <ListItem
        key = {item.keyID}
        keyID = {item.keyID}
        text = {item.text}
        selected = {item.selected}
        btnType = {this.props.btnType}
        onButtonClick = {this.props.onButtonClick}
        onSelect = {this.props.onSelect}
      />
    }.bind(this));
    var className = 'list-unstyled ' + this.props.className; 

    return (
      <ul className={className}>
        {listItems}
      </ul>
    );
  }
});

module.exports = List;