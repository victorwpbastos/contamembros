var _ = require('underscore'),
	Backbone = require('backbone'),
	Sacramentais = require('collections/sacramentais'),
	Membros = require('collections/membros');

module.exports = require('boiler').View.extend({
	template: require('templates/sacramentais/listar.tpl'),
	onRender: function() {
		var sacramentais = new Sacramentais();
		var membros = new Membros();

		sacramentais.fetch();
		membros.fetch();

		this.set('sacramentais', sacramentais);
		this.set('membros', membros);

		this.find('input').valueAsDate = new Date();
	},
	addSacramental: function() {
		this.event.original.preventDefault();

		var data = this.find('input').value.split('-'),
			sacramentais = this.get('sacramentais');

		data = data[2] + '/' + data[1] + '/' + data[0];

		if(sacramentais.where({data: data}).length > 0) {
			alert('data já cadastrada');
		} else {
			var sacramental = sacramentais.create({
				data: data,
				membros: this.get('membros'),
				visitantes: 0
			});

			this.set('data', '');

			this.get('sacramentais').fetch();
		}
	},
	showSacramental: function() {
		this.event.original.preventDefault();

		Backbone.history.navigate('#/sacramentais/' + this.event.context.id);
	},
	removerSacramental: function() {
		this.event.original.preventDefault();

		var sacramental = this.event.context;

		var resposta = confirm('Excluir sacramental?');

		if(resposta) {
			sacramental.destroy();
		}
	}
});