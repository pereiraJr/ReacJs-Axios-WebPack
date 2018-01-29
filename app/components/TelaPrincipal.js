var React = require('react');
var createReactClass = require('create-react-class');
var Form = require('./Form');
var Tabela = require('./Tabela');

var TelaPrincipal = createReactClass ({
  getInitialState: function() {
            return {
                nome: '',
                raca: '',
                peso: ''
            }
        },
        inserirAnimal: function (animal) {
          this.setState({animal: animal});
        },
  render: function () {
    return (
      <div>
      <Form
      inserirAnimal = {this.inserirAnimal}/>
      <Tabela />
      </div>
    );
  }
});

module.exports = TelaPrincipal;
