var gulp = require('gulp'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  settings = require('./settings.json');

gulp.task('template', function () {
  gulp.src('./src/template/*.jade')
    .pipe(jade({
      locals: settings,
      pretty: true
      }))
    .pipe(gulp.dest('./public/'));
    console.log(settings); 
});

gulp.task('style', function () {
  gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('build', ['template', 'style'], function () {
  gulp.src('./src/images/*')
    .pipe(gulp.dest('./public/images'))
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['style']);
  gulp.watch('./src/template/*.jade', ['template']);
  gulp.watch('./src/template/layout/*.jade', ['template']);
  gulp.watch('./settings.json', ['template']);
});

gulp.task('test', function () {
    
});

gulp.task('deploy', function () {
    
});