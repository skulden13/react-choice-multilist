var React = require('react');

var ListButton = React.createClass({
  render() {
    var btnClass = 'btn btn-sm ' + this.props.btnClass;
    var iconClass = 'fa ' + this.props.btnIconClass;

    return (
      <span className={btnClass} onClick={this.props.onClick} >
        <i className={iconClass}></i>
        {this.props.text}
      </span>
    );
  }
});

module.exports = ListButton;