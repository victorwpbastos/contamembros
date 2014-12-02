var gulp = require('gulp'),
	browsersync = require('browser-sync');

gulp.task('server', function() {
	browsersync({
		server: {
			baseDir: './'
		},
		files: ['temp/{application,libs}.js', 'assets/**', 'index.html'],
		notify: false,
		ghostMode: false,
		logPrefix: 'Boiler',
		online: false
	});
});