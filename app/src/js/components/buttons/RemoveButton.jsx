var React = require('react');
var ListButton = require('./ListButton.jsx');

var RemoveButton = React.createClass({
  render() {
    return (
      <ListButton
        btnClass={'pull-right btn-remove btn-danger'}
        btnIconClass={'icon icon-close'}
        text='Remove'
        onClick={this.props.onClick}
      />
    );
  }
});

module.exports = RemoveButton;
