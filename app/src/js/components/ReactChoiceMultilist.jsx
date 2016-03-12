var React = require('react');
var List = require('./lists/List.jsx');
var ListButton = require('./buttons/ListButton.jsx');
var _ = require('lodash');

var ReactChoiceMultilist = React.createClass({
  getInitialState() {
    return {
      listOptions: this.props.options,
      listFavorites: this.props.favorites,
      listOptionsIsChecked: false,
      listFavoritesIsChecked: false
    };
  },

  // function for moving items from one list to another
  onMove(items, from, to) {
    var listFrom = _.uniq(this.state[from]);
    var listTo = _.uniq(this.state[to]);

    _.forEach(items, function(item) {
      var index = _.findIndex(listFrom, function(items) {
        return (items.keyID === item.keyID);
      });
      
      var oldObj = listFrom[index];
      _.pull(listFrom, oldObj);
      item.checked = false;
      listTo.push(item);
    });

    var stateObject = function() {
      var result = {};
      result[from] = listFrom;
      result[to] = listTo;
      return result;
    }();
    this.setState(stateObject,
      function() { this.isChecked(from); }
    );
  },

  // function for getting all checked elements in list
  getCheckedList(listName) {
    var list = _.uniq(this.state[listName]);
    var result = [];
    _.forEach(list, function(item) {
      (item.checked === true) && result.push(item);
    });
    return result;
  },

  // function for detecting list for checked items
  isChecked(listName) {
    var checked = Boolean(this.getCheckedList(listName).length);
    var stateObject = function() {
      var result = {};
      result[listName + 'IsChecked'] = checked;
      return result;
    }();
    this.setState(stateObject);
  },

  // check event function
  onCheck(item, listName) {
    var list = _.uniq(this.state[listName]);
    var index = _.findIndex(list, function(items) {
      return (items.keyID === item.keyID);
    });
    list[index].checked = item.checked;

    var stateObject = function() {
      var result = {};
      result[listName] = list;
      return result;
    }();

    this.setState(stateObject, function(){ this.isChecked(listName) });
  },

  // check event function for options list
  onCheckOptions(item) {
    this.onCheck(item, 'listOptions');
  },

  // check event function for favorites list
  onCheckFavorites(item) {
    this.onCheck(item, 'listFavorites');
  },

  // function for removing item from favorites 
  onRemove(item) {
    this.onMove([item], 'listFavorites', 'listOptions');
  },

  // function for adding item to favorites
  onAdd(item) {
    this.onMove([item], 'listOptions', 'listFavorites');
  },

  // function for moving items from options to favorites
  onMoveToFavorites() {
    this.onMove(this.getCheckedList('listOptions'), 'listOptions', 'listFavorites');
  },

  // function for moving items from favorites to options
  onMoveToOptions() {
    this.onMove(this.getCheckedList('listFavorites'), 'listFavorites', 'listOptions');
  },

  render() {
    return (
      <div className="container">
        <div className="col-lg-5 col-md-5 col-sm-5">
          <List 
            items={this.state.listOptions}
            className={'list-options'}
            btnType={'add'}
            onButtonClick={this.onAdd}
            onCheck={this.onCheckOptions}
          />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">
          <div className="text-center"> 
            <p>
              <ListButton
                btnClass = {'btn-add btn-primary'}
                btnIconClass = {'fa-chevron-right'}
                disabled = {!this.state.listOptionsIsChecked}
                text = {'Move'}
                onClick = {this.onMoveToFavorites}
              />
            </p>
            <p>
              <ListButton
                btnClass = {'btn-add btn-primary'}
                btnIconClass = {'fa-chevron-left'}
                disabled = {!this.state.listFavoritesIsChecked}
                text = {'Move'}
                onClick = {this.onMoveToOptions}
              />
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5">
          <List
            items={this.state.listFavorites} 
            className={'list-favorites'}
            btnType={'remove'}
            onButtonClick={this.onRemove}
            onCheck={this.onCheckFavorites}
          />
        </div>
      </div>
    );
  }
});

module.exports = ReactChoiceMultilist;