var React = require('react');
var ListButton = require('./ListButton.jsx');

var RemoveButton = React.createClass({
  render() {
    return (
      <ListButton
        btnClass={'RCMButton--remove u-floatRight'}
        btnIconClass={'RCMIcon icon RCMIcon icon-close'}
        text='Remove'
        onClick={this.props.onClick}
      />
    );
  }
});

module.exports = RemoveButton;
