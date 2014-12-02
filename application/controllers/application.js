var Boiler = require('boiler');

module.exports = Boiler.Controller.extend({
	home: function() {
		this.showView('#main', 'views/home');
	},
	listarMembros: function() {
		this.showView('#main', 'views/membros/listar');
	},
	listarSacramentais: function() {
		this.showView('#main', 'views/sacramentais/listar');
	},
	detalharSacramental: function(id) {
		var sacramental = new (require('models/sacramental'))({id: id});

		sacramental.fetch();

		this.showView('#main', 'views/sacramentais/detalhe', {
			data:{
				sacramental: sacramental
			}
		});
	},
	admin: function() {
		this.showView('#main', 'views/admin/admin');
	}
});