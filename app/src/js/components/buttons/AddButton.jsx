var React = require('react');
var ListButton = require('./ListButton.jsx');

var AddButton = React.createClass({
  render() {
    return (
      <ListButton
        btnClass={'pull-right btn-add btn-success'}
        btnIconClass={'icon icon-plus'}
        text={'Add'}
        onClick={this.props.onClick}
      />
    );
  }
});

module.exports = AddButton;
