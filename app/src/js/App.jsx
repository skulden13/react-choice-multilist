var React = require('react');
var ReactDOM = require('react-dom');
var ReactChoiceMultilist = require('./components/ReactChoiceMultilist.jsx');

var listOptions = [
  {keyID: 1, text: 'ReactJS', checked: false}, 
  {keyID: 2, text: 'Backbone', checked: false}, 
  {keyID: 3, text: 'AngularJS', checked: false}, 
  {keyID: 4, text: 'EmberJS', checked: false}, 
  {keyID: 5, text: 'RequireJS', checked: false}, 
  {keyID: 6, text: 'ThreeJS', checked: false}
];
var listFavorites = [
  {keyID: 7, text: 'jQuery', checked: false},
  {keyID: 8, text: 'LoDash', checked: false},
  {keyID: 9, text: 'Underscore', checked: false}
];

ReactDOM.render(
  <ReactChoiceMultilist
    options={listOptions}
    favorites={listFavorites}
  />,
  document.getElementById('app')
);