var React = require('react');
var ListButton = require('./ListButton.jsx');

var AddButton = React.createClass({
  render() {
    return (
      <ListButton
        btnClass={'RCMButton--add u-floatRight'}
        btnIconClass={'RCMIcon icon RCMIcon icon-plus'}
        text={'Add'}
        onClick={this.props.onClick}
      />
    );
  }
});

module.exports = AddButton;
