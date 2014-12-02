var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	localStorage: new Backbone.LocalStorage('sacramentais'),
	parse: function(res) {
		res.membros = new Backbone.Collection(res.membros);
		return res;
	}
});