module.exports = {
	''                 : require('controllers/application').home,
	'membros'          : require('controllers/application').listarMembros,
	'sacramentais'     : require('controllers/application').listarSacramentais,
	'sacramentais/:id' : require('controllers/application').detalharSacramental,
	'admin'            : require('controllers/application').admin
};