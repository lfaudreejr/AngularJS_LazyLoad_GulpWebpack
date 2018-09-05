var gulp = require('gulp');
var gls = require('gulp-live-server')
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

const SRC = 'src/app/index.js'
const DST = 'dist/'

gulp.task('build', function() {
	return gulp.src(SRC)
	.pipe(webpack(webpackConfig))
	.pipe(gulp.dest(DST));
});

gulp.task('serve', function() {
	//1. serve with default settings
	// var server = gls.static(); //equals to gls.static('public', 3000);
	// server.start();
	
	//2. serve at custom port
	var server = gls.static('dist', 8080);
	server.start();
	
	//3. serve multi folders
	// var server = gls.static(['dist', '.tmp']);
	// server.start();
	
	//use gulp.watch to trigger server actions(notify, start or stop)
	gulp.watch(['src/**/*.css', 'src/**/*.pug', 'src/**/*.js'], function (file) {
		server.notify.apply(server, [file]);
	});
});
