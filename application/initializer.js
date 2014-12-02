// Código a ser executado antes da inicialização da aplicação.
var Boiler = require('boiler'),
	Backbone = require('backbone'),
	Ractive = require('ractive');

require('ractive-adaptors-backbone');
require('backbone.localStorage');

Ractive.defaults.adapt.push('Backbone');

// Configura o template de loading das requisições ajax
// Boiler.setLoadingTemplate(require('templates/ajaxLoading.tpl'));

// Configura o template de error das requisições ajax
// Boiler.setErrorTemplate(require('templates/ajaxError.tpl'));

Boiler.showView('#menu', 'views/menu');