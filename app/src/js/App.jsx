var React = require('react');
var ReactDOM = require('react-dom');
var ReactChoiceMultilist = require('./components/ReactChoiceMultilist.jsx');

var listVariants = [
  {keyID: 1, text: 'ReactJS', selected: false}, 
  {keyID: 2, text: 'Backbone', selected: false}, 
  {keyID: 3, text: 'AngularJS', selected: false}, 
  {keyID: 4, text: 'EmberJS', selected: false}, 
  {keyID: 5, text: 'RequireJS', selected: false}, 
  {keyID: 6, text: 'ThreeJS', selected: false}
];
var listSelected = [
  {keyID: 7, text: 'jQuery', selected: false},
  {keyID: 8, text: 'LoDash', selected: false},
  {keyID: 9, text: 'Underscore', selected: false}
];

ReactDOM.render(
  <ReactChoiceMultilist
    variants={listVariants}
    selected={listSelected}
  />,
  document.getElementById('app')
);