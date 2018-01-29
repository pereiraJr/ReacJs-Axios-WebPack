/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pereirajr/Documentos/Animais/node_modules/axios/index.js'\n    at Error (native)");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pereirajr/Documentos/Animais/node_modules/react/index.js'\n    at Error (native)");

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var axios = __webpack_require__(17);

var Animais = {
  getAllAnimais: function () {
    return axios.get('http://localhost/slimApi/animais');
  },

  inserirAnimal: function (nome, raca, peso) {
    return axios.post('http://localhost/slimApi/animais', {
      nome: nome,
      raca: raca,
      peso: peso
    });
  }
};

module.exports = Animais;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(28);

var Github = __webpack_require__(37);
var Animais = __webpack_require__(61);
var Tabela = __webpack_require__(62);
var Form = __webpack_require__(63);
var TelaPrincipal = __webpack_require__(64);

//ReactDOM.render(<Github/>, document.getElementById('app'));
//ReactDOM.render(<Tabela/>, document.getElementById('app'));
//ReactDOM.render(<Form/>, document.getElementById('app'));
ReactDOM.render(React.createElement(TelaPrincipal, null), document.getElementById('app'));

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pereirajr/Documentos/Animais/node_modules/react-dom/index.js'\n    at Error (native)");

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pereirajr/Documentos/Animais/app/components/Github.js'\n    at Error (native)");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pereirajr/Documentos/Animais/node_modules/create-react-class/index.js'\n    at Error (native)");

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pereirajr/Documentos/Animais/app/components/Animais.js'\n    at Error (native)");

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);
var createReactClass = __webpack_require__(4);
var AnimaisAPI = __webpack_require__(23);

var Tabela = createReactClass({
  displayName: 'Tabela',

  getInitialState: function () {
    return { animal: [] };
  },
  componentDidMount: function () {
    AnimaisAPI.getAllAnimais().then(function (response) {
      this.setState({ animal: response.data });
    }.bind(this)), error = function (qw) {
      console.log(qw);
    };
  },

  render: function () {
    return React.createElement(
      'div',
      { className: 'col-md-6 configdiv' },
      React.createElement(
        'table',
        { className: 'table table-bordered' },
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            ' # '
          ),
          React.createElement(
            'th',
            null,
            'Nome '
          ),
          React.createElement(
            'th',
            null,
            'Raca'
          ),
          React.createElement(
            'th',
            null,
            'Peso'
          )
        ),
        this.state.animal.map((item, index) => React.createElement(
          'tr',
          { key: index },
          React.createElement(
            'td',
            null,
            item.id
          ),
          React.createElement(
            'td',
            null,
            item.nome
          ),
          React.createElement(
            'td',
            null,
            item.raca
          ),
          React.createElement(
            'td',
            null,
            item.peso
          )
        ))
      )
    );
  }
});

module.exports = Tabela;

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);
var createReactClass = __webpack_require__(4);
var axios = __webpack_require__(17);
var AnimaisAPI = __webpack_require__(23);

var Form = createReactClass({
    displayName: 'Form',

    getInitialState: function () {
        return {
            nome: '',
            raca: '',
            peso: ''
        };
    },
    handleSubmit: function (e) {
        e.preventDefault();
        AnimaisAPI.inserirAnimal(this.nome.value, this.raca.value, this.peso.value).then(alert("SUCESSO")).catch(error => {
            console.log(error);
        });
    },
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'section',
                { className: 'access' },
                React.createElement(
                    'div',
                    { className: 'row center-xs container' },
                    React.createElement(
                        'div',
                        { className: 'col-xs-12 col-sm-4 register' },
                        React.createElement(
                            'h1',
                            null,
                            'Register'
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(
                                'form',
                                { onSubmit: this.handleSubmit },
                                React.createElement(
                                    'label',
                                    null,
                                    'Nome'
                                ),
                                React.createElement('input', { className: 'form-control', type: 'text', name: 'nome', placeholder: 'nome', ref: input => {
                                        this.nome = input;
                                    } }),
                                React.createElement(
                                    'label',
                                    { htmlFor: 'raca' },
                                    'Nome da raca'
                                ),
                                React.createElement('input', { className: 'form-control', type: 'text', name: 'raca', placeholder: 'raca', ref: input => {
                                        this.raca = input;
                                    } }),
                                React.createElement(
                                    'label',
                                    { htmlFor: 'email' },
                                    'Peso'
                                ),
                                React.createElement('input', { className: 'form-control', type: 'text', name: 'peso', placeholder: 'peso', ref: input => {
                                        this.peso = input;
                                    } }),
                                React.createElement('input', { className: 'btn btn-default', type: 'submit', value: 'Register' }),
                                React.createElement('br', null)
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = Form;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(2);
var createReactClass = __webpack_require__(4);
var Form = __webpack_require__(63);
var Tabela = __webpack_require__(62);

var TelaPrincipal = createReactClass({
  displayName: 'TelaPrincipal',

  getInitialState: function () {
    return {
      nome: '',
      raca: '',
      peso: ''
    };
  },
  inserirAnimal: function (animal) {
    this.setState({ animal: animal });
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(Form, {
        inserirAnimal: this.inserirAnimal }),
      React.createElement(Tabela, null)
    );
  }
});

module.exports = TelaPrincipal;

/***/ })

/******/ });