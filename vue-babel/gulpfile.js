const gulp = require("gulp");
const babel = require('gulp-babel');

gulp.task("default", ['watch']);

gulp.task("babel", function() {
	return gulp.src("src/*.js")
	.pipe(babel({
		presets: ['env']
	}))
	.
	pipe(gulp.dest('lib/'));
});

gulp.task("watch", function() {
    gulp.watch("src/*.js", ['babel'])
});