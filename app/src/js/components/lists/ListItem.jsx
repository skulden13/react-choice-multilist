var React = require('react');
var AddButton = require('./../buttons/AddButton.jsx');
var RemoveButton = require('./../buttons/RemoveButton.jsx');

var ListItem = React.createClass({
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },

  onButtonClick() {
    this.props.onButtonClick({
      keyID: this.props.keyID,
      text: this.props.text,
      selected: true
    });
  },

  onSelect() {
    this.setState(
      {
        selected: !this.state.selected
      },
      function() {
        this.props.onSelect({
          keyID: this.props.keyID,
          text: this.props.text,
          selected: this.state.selected
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
    var iconClassName = 'fa ';
    if (this.state.selected) {
      className += 'selected';
      iconClassName += 'fa-check-square-o';
    } else {
      iconClassName += 'fa-square-o';
    }

    return (
      <li className={className} onClick={this.onSelect} >
        <i className={iconClassName}></i>
        {this.props.text}
        {getButton()}
      </li>
    );
  }
});

module.exports = ListItem;