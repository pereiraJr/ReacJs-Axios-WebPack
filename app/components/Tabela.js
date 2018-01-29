var React = require('react');
var createReactClass = require('create-react-class');
var AnimaisAPI = require('../services/Animais');

var Tabela = createReactClass({
  getInitialState: function () {
    return { animal: []};
  },
  componentDidMount: function () {
    AnimaisAPI.getAllAnimais().then(function (response) {
      this.setState({animal: response.data});
    }.bind(this)),
    error= function (qw){
      console.log(qw);
    }
  },

  render:function () {
    return(
      <div className="col-md-6 configdiv">
      <table className="table table-bordered">
        <tr>
          <th> # </th>
          <th>Nome </th>
          <th>Raca</th>
          <th>Peso</th>
        </tr>
        {this.state.animal.map((item, index) =>(
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.raca}</td>
            <td>{item.peso}</td>
        </tr>
        ))}
      </table>
      </div>
    );
  }
});

module.exports = Tabela;
