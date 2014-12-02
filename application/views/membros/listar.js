var Membros = require('collections/membros');

module.exports = require('boiler').View.extend({
	template: require('templates/membros/listar.tpl'),
	onRender: function() {
		var membros = new Membros();

		membros.fetch();

		this.set('membros', membros);
	},
	toggleAtivo: function() {
		this.event.original.preventDefault();

		var membro = this.event.context;

		membro.set('ativo', !membro.get('ativo'));

		membro.save();

		this.get('membros').sort();
	}
});