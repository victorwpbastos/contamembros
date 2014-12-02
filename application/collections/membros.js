var Backbone = require('backbone'),
	_ = require('underscore'),
	Config = require('config');

module.exports = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage('membros'),
	importarMembros: function() {
		this.fetch();

		_.each(_.clone(this.models), function(model) {
			model.destroy();
		});

		$.ajax({
			url: Config.MEMBROS_URL,
			cache: false,
			dataType: 'JSON'
		}).then(function(res) {
			_(res).each(function(membro) {
				this.create(membro);
			}.bind(this));

			alert(this.length + ' membros importados!');
		}.bind(this));
	},
	comparator: function(ma, mb) {
		if(ma.get('ativo') === mb.get('ativo')) {
			return ma.get('nome') > mb.get('nome') ? 1 : -1;
		}
		return ma.get('ativo') < mb.get('ativo') ? 1 : -1;
	}
});