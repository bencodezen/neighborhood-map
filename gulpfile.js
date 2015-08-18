var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;

gulp.task('default', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}
	});

	gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd:'app'}, reload);
});