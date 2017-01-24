var React = require('react');

var ListButton = React.createClass({
  render() {
    var disabledClass = (this.props.disabled) ? ' disabled' : '';
    var btnClass = 'btn btn-sm ' +
      this.props.btnClass +
      disabledClass;
    var iconClass = 'icon ' + this.props.btnIconClass;

    return (
      <span className={btnClass} onClick={this.props.onClick} >
        <i className={iconClass}></i>
        {this.props.text}
      </span>
    );
  }
});

module.exports = ListButton;
