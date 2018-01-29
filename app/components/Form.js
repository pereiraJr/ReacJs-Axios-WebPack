var React = require('react');
var createReactClass = require('create-react-class');
var axios = require('axios');
var AnimaisAPI = require('../services/Animais');

var Form = createReactClass ({
  getInitialState: function() {
            return {
                nome: '',
                raca: '',
                peso: ''
            }
        },
        handleSubmit: function(e) {
          e.preventDefault();
          AnimaisAPI.inserirAnimal(
            this.nome.value,
            this.raca.value,
            this.peso.value)
            .then(alert("SUCESSO"))
            .catch((error) =>{
              console.log(error);
            });
        },
  render: function () {
    return(
      <div>
        <section className="access">
            <div className="row center-xs container">

                <div className="col-xs-12 col-sm-4 register">
                    <h1>Register</h1>
                     <div className="form-group">
                    <form onSubmit={this.handleSubmit}>
                        <label>Nome</label>
                        <input className="form-control" type="text" name="nome" placeholder="nome" ref={(input) => { this.nome = input; }}/>
                          <label htmlFor="raca">Nome da raca</label>
                        <input className="form-control" type="text" name="raca" placeholder="raca" ref={(input) => { this.raca = input; }}/>
                        <label htmlFor="email">Peso</label>
                        <input className="form-control" type="text" name="peso" placeholder="peso" ref={(input) => { this.peso  = input; }}/>
                        <input className="btn btn-default" type="submit" value="Register"/><br></br>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
});

module.exports = Form;
