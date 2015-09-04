var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		autoprefixer = require('gulp-autoprefixer'),
		reload = browserSync.reload;

gulp.task('uglify', function() {
	return gulp.src('app/styles/styles.css')
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('app/dist/'));
});

gulp.task('default', function() {
	browserSync({
		server: {
			baseDir: 'app',
			routes: {
				"/bower_components": "bower_components"
			}
		}
	});

	gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd:'app'}, reload);
});