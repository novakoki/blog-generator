var gulp = require('gulp'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  marked = require('gulp-markdown'),
  settings = require('./src/settings.json'),
  route_table = require('./src/js/route_table.json'),
  gulpBrowser = require('gulp-browser'),
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

gulp.task('route', function () {
  fs.readdir('./src/posts', function (err, files) {
    for (var filename of files) {
      var date = fs.statSync('./src/posts/'+filename)['atime'];
      route_table[filename.split('.')[0]] = {"date" : date};
      fs.writeFileSync('./src/js/route_table.json', JSON.stringify(route_table), 'utf-8');
    }
  }); 
});

gulp.task('browserify', function () {
  gulp.src('./src/js/*.js')
    .pipe(gulpBrowser.browserify())
    .pipe(gulp.dest('./public/js'))
})

gulp.task('build', ['template', 'style', 'markdown', 'route', 'browserify'], function () {
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