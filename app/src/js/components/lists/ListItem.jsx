var React = require('react');
var AddButton = require('./../buttons/AddButton.jsx');
var RemoveButton = require('./../buttons/RemoveButton.jsx');

var ListItem = React.createClass({
  getInitialState() {
    return {
      checked: this.props.checked
    };
  },

  onButtonClick() {
    this.props.onButtonClick({
      keyID: this.props.keyID,
      text: this.props.text,
      checked: true
    });
  },

  onCheck() {
    this.setState(
      {checked: !this.state.checked},
      function() {
        this.props.onCheck({
          keyID: this.props.keyID,
          text: this.props.text,
          checked: this.state.checked
        });
      }
    );
  },

  render() {
    var getButton = function() {
      if (this.props.btnType === 'add') {
        return <AddButton onClick={this.onButtonClick} />;
      } else if (this.props.btnType === 'remove') {
        return <RemoveButton onClick={this.onButtonClick} />;
      }
    }.bind(this);

    var className = 'list-item ';
    var iconClassName = 'icon ';
    if (this.state.checked) {
      className += 'checked';
      iconClassName += 'icon-check-square-o';
    } else {
      iconClassName += 'icon-square-o';
    }

    return (
      <li className={className} onClick={this.onCheck} >
        <i className={iconClassName}></i>
        {this.props.text}
        {getButton()}
      </li>
    );
  }
});

module.exports = ListItem;
