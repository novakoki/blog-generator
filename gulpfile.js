const gulp = require('gulp'),
  sass = require('gulp-sass'),
  babelify = require('babelify'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  // buffer = require('vinyl-buffer'),
  // uglify = require('gulp-uglify'),
  // sourcemaps = require('gulp-sourcemaps'),
  jade = require('gulp-jade'),
  marked = require('gulp-markdown'),
  settings = require('./src/settings.json'),
  fs = require('fs');

gulp.task('template', function () {
  gulp.src('./src/template/*.jade')
    .pipe(jade({
      locals: settings,
      pretty: true
      }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('markdown', function () {
  gulp.src('./src/posts/*.md')
    .pipe(marked())
    .pipe(gulp.dest('./public/posts/'));
});

gulp.task('style', function () {
  gulp.src('./src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('javascript', function () {
  browserify({entries: './src/js/app.js', debug: true})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/js'));
});

// gulp.task('route', function () {
  
// });

gulp.task('generate', ['template', 'style', 'markdown', 'route', 'javascript'], function () {
  gulp.src('./src/images/*')
    .pipe(gulp.dest('./public/images'))
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['style']);
  gulp.watch('./src/template/*.jade', ['template']);
  gulp.watch('./src/template/layout/*.jade', ['template']);
  gulp.watch('./src/settings.json', ['template']);
});

gulp.task('test', function () {

});

gulp.task('deploy', function () {

});
