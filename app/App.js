var React = require('react');
var ReactDOM = require('react-dom');

var Github = require('./components/Github');
var Animais = require('./components/Animais')
var Tabela = require('./components/Tabela')
var Form = require('./components/Form')
var TelaPrincipal = require('./components/TelaPrincipal')

//ReactDOM.render(<Github/>, document.getElementById('app'));
//ReactDOM.render(<Tabela/>, document.getElementById('app'));
//ReactDOM.render(<Form/>, document.getElementById('app'));
ReactDOM.render(<TelaPrincipal/>, document.getElementById('app'));
