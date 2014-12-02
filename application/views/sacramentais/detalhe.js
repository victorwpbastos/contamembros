module.exports = require('boiler').View.extend({
	template: require('templates/sacramentais/detalhe.tpl'),
	onRender: function() {
		this.observe('sacramental.visitantes', function() {
			this.get('sacramental').save();
		}, {init: false});
	},
	togglePresente: function() {
		this.event.original.preventDefault();

		var membro = this.event.context;

		membro.set('presente', !membro.get('presente'));

		this.get('sacramental').save();
	}
});