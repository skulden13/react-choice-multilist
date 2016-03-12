var React = require('react');
var List = require('./lists/List.jsx');
var ListButton = require('./buttons/ListButton.jsx');
var _ = require('lodash');

var ReactChoiceMultilist = React.createClass({
  getInitialState() {
    return {
      listVariants: this.props.variants,
      listSelected: this.props.selected
    };
  },

  // function for moving [items] from [from] list to [to] list
  onMove(items, from, to) {
    var listFrom = _.uniq(this.state[from]);
    var listTo = _.uniq(this.state[to]);

    _.forEach(items, function(item) {
      var index = _.findIndex(listFrom, function(items) {
        return (items.keyID === item.keyID);
      });
      
      var oldObj = listFrom[index];
      oldObj.selected = false;
      _.pull(listFrom, oldObj);
      listTo.push(item);
    });

    var stateObject = function() {
      var result = {};
      result[from] = listFrom;
      result[to] = listTo;
      return result;
    }();
    this.setState(stateObject);
  },

  // get all selected elements from list
  getSelected(listName) {
    var list = _.uniq(this.state[listName]);
    var result = [];
    _.forEach(list, function(item) {
      (item.selected === true) && result.push(item);
    });
    return result;
  },

  // select function: check item
  onSelect(item, listName) {
    var list = _.uniq(this.state[listName]);
    var index = _.findIndex(list, function(items) {
      return (items.keyID === item.keyID);
    });
    list[index].selected = item.selected;

    var stateObject = function() {
      var result = {};
      result[listName] = list;
      return result;
    }();

    this.setState(stateObject);
  },

  // select item in listVariants
  onSelectVariants(item) {
    this.onSelect(item, 'listVariants');
  },

  // select item in listSelected
  onSelectSelected(item) {
    this.onSelect(item, 'listSelected');
  },

  // move(remove) one item from listSelected to listVariants 
  onRemove(item) {
    this.onMove([item], 'listSelected', 'listVariants');
  },

  // move(add) one item from listVariants to listSelected
  onAdd(item) {
    this.onMove([item], 'listVariants', 'listSelected');
  },

  // move items from listVariants to listSelected
  onMoveToSelected() {
    this.onMove(this.getSelected('listVariants'), 'listVariants', 'listSelected');
  },

  // move items from listSelected to listVariants
  onMoveToVariants() {
    this.onMove(this.getSelected('listSelected'), 'listSelected', 'listVariants');
  },

  render() {
    return (
      <div className="container">
        <div className="col-lg-5 col-md-5 col-sm-5">
          <List 
            items={this.state.listVariants}
            className={'list-variants'}
            btnType={'add'}
            onButtonClick={this.onAdd}
            onSelect={this.onSelectVariants}
          />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">
          <div className="text-center"> 
            <p>
              <ListButton
                btnClass = {'btn-add btn-primary'}
                btnIconClass = {'fa-chevron-right'}
                text = {'Move'}
                onClick = {this.onMoveToSelected}
              />
            </p>
            <p>
              <ListButton
                btnClass = {'btn-add btn-primary'}
                btnIconClass = {'fa-chevron-left'}
                text = {'Move'}
                onClick = {this.onMoveToVariants}
              />
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5">
          <List
            items={this.state.listSelected} 
            className={'list-selected'}
            btnType={'remove'}
            onButtonClick={this.onRemove}
            onSelect={this.onSelectSelected}
          />
        </div>
      </div>
    );
  }
});

module.exports = ReactChoiceMultilist;