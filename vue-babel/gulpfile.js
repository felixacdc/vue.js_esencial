const gulp = require("gulp");
const babel = require('gulp-babel');

gulp.task("default", function() {
	console.log("Hola desde gulp!!!");
});

gulp.task("babel", function() {
	return gulp.src("src/*.js")
	.pipe(babel({
		presets: ['es2015']
	}))
	.
	pipe(gulp.dest('lib/'));
});
