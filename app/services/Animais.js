var axios = require('axios');

var Animais = {
  getAllAnimais: function (){
    return axios.get('http://localhost/slimApi/animais');
  },

  inserirAnimal: function(nome, raca, peso){
    return axios.post('http://localhost/slimApi/animais',{
      nome: nome,
      raca: raca,
      peso: peso
  })
  }
};

module.exports = Animais;
