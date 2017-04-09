var React = require('react');

var ListButton = React.createClass({
  render() {
    var disabledClass = (this.props.disabled) ? ' is-disabled' : '';
    var btnClass = 'RCMButton ' +
      this.props.btnClass +
      disabledClass;
    var iconClass = 'RCMIcon icon ' + this.props.btnIconClass;

    return (
      <span className={btnClass} onClick={this.props.onClick} >
        <i className={iconClass}></i>
        {this.props.text}
      </span>
    );
  }
});

module.exports = ListButton;
