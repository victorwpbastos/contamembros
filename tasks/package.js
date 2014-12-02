var gulp = require('gulp'),
	pkg = require('../package.json'),
	plugins = require('gulp-load-plugins')();

gulp.task('package', function() {
	return gulp.src('dist/' + pkg.version + '/**/*')
		.pipe(plugins.zip('ContaMembros.zip'))
		.pipe(gulp.dest('./'));
});