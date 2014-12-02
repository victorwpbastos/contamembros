var Backbone = require('backbone'),
	_ = require('underscore'),
	Config = require('config');

require('dropbox');

module.exports = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage('sacramentais'),
	exportarSacramentais: function() {
		var dropbox = new Dropbox.Client({token: Config.DROPBOX_TOKEN}),
			content;

		this.fetch();

		if(this.length === 0) {
			alert('Não há sacramentais cadastradas!');
			return;
		}

		this.each(function(sacramental) {
			content = JSON.stringify(sacramental.toJSON(), null, '\t');
			dropbox.writeFile('sacramental_' + sacramental.get('data').replace(/\//g, '_') + '.json', content, {noOverwrite: false}, function(error, stat) {});
		});

		if(this.length === 1) {
			alert(this.length + ' sacramental exportada!');
		} else {
			alert(this.length + ' sacramentais exportadas!');
		}
	},
	comparator: function(ma, mb) {
		return ma.get('data') < mb.get('data');
	},
	parse: function(res) {
		_(res).each(function(model) {
			model.visitantes = model.visitantes || 0;
			model.presentes = _(model.membros).where({presente: true}).length + model.visitantes;
			model.ausentes = _(model.membros).where({presente: false}).length;
		});
		return res;
	}
});