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
      <div className="RCMWidget">
        <div className="RCMGrid">
          <div className="RCMGrid-item RCMGrid-item--40">
            <List
              items={this.state.listOptions}
              className={'RCMList--options'}
              btnType={'add'}
              onButtonClick={this.onAdd}
              onCheck={this.onCheckOptions}
            />
          </div>
          <div className="RCMGrid-item RCMGrid-item--20">
            <div className="u-textCenter">
              <p>
                <ListButton
                  btnIconClass = {'RCMIcon icon RCMIcon icon-chevron-right'}
                  disabled = {!this.state.listOptionsIsChecked}
                  text = {'Move'}
                  onClick = {this.onMoveToFavorites}
                />
              </p>
              <p>
                <ListButton
                  btnIconClass = {'RCMIcon icon RCMIcon icon-chevron-left'}
                  disabled = {!this.state.listFavoritesIsChecked}
                  text = {'Move'}
                  onClick = {this.onMoveToOptions}
                />
              </p>
            </div>
          </div>
          <div className="RCMGrid-item RCMGrid-item--40">
            <List
              items={this.state.listFavorites}
              className={'RCMList--favorites'}
              btnType={'remove'}
              onButtonClick={this.onRemove}
              onCheck={this.onCheckFavorites}
            />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ReactChoiceMultilist;
