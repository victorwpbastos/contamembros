var Membros = require('collections/membros'),
	Sacramentais = require('collections/sacramentais'),
	Config = require('config');

require('dropbox');

module.exports = require('boiler').View.extend({
	template: require('templates/admin/admin.tpl'),
	importarMembros: function() {
		this.event.original.preventDefault();

		var resposta = confirm('Importar todos os membros registrados?');

		if(resposta) {
			(new Membros()).importarMembros();
		}
	},
	exportarSacramentais: function() {
		this.event.original.preventDefault();

		var resposta = confirm('Exportar todas as sacramentais?');

		if(resposta) {
			(new Sacramentais()).exportarSacramentais();
		}
	}
});