var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var connect = require('gulp-connect');
var open = require('gulp-open');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var port = process.env.port || 3031;

gulp.task('copy-fonts', function () {
  return gulp.src('./node_modules/font-awesome/fonts/**.*')
    .pipe(gulp.dest('./app/dist/fonts/'));
});

gulp.task('sass', function () {
  return gulp.src('./app/src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/dist/css/'));
});

gulp.task('browserify', function() {
	gulp.src('./app/src/js/App.jsx')
		.pipe(browserify({ transform: 'reactify' }))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('./app/dist/js'))
});

gulp.task('open', function() {
	var options = {
		uri: 'http://localhost:' + port
	};

	gulp.src('./app/index.html')
		.pipe(open(options));
});

gulp.task('connect', function() {
	connect.server({
		root: './',
		port: port,
		livereload: true
	});
});

gulp.task('css', function() {
	gulp.src('./app/*.css')
		.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src('./app/dist/**/*.js')
		.pipe(connect.reload());
});

gulp.task('html', function() {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('app/dist/css/*.css', ['css']);
	gulp.watch('app/dist/js/*.js', ['js']);
	gulp.watch('app/index.html', ['html']);
	gulp.watch('app/src/css/*.scss', ['sass']);
	gulp.watch('app/src/js/**/*.jsx', ['browserify']);
});

gulp.task('default', function(){
	runSequence('browserify', 'copy-fonts', 'sass');
});

gulp.task('serve', function(){
	runSequence('browserify', 'copy-fonts', 'sass', 'connect', 'open', 'watch');
});