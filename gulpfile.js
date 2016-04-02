const gulp = require('gulp'),
  sass = require('gulp-sass'),
  //babelify = require('babelify'),
  //browserify = require('browserify'),
  //source = require('vinyl-source-stream'),
  //buffer = require('vinyl-buffer'),
  //uglify = require('gulp-uglify'),
  // sourcemaps = require('gulp-sourcemaps'),
  jade = require('gulp-jade'),
  rename = require('gulp-rename'),
  marked = require('marked'),
  settings = require('./src/settings.json'),
  fs = require('fs'),
  del = require('del'),
  live_server = require('live-server');
  
function get_locals(params) {
  var local = JSON.parse(JSON.stringify(settings));
  for (var i in params) {
    local[i] = params[i];
  }
  return local;
}

gulp.task('template', function () {
  for (var i in settings.articles) {
    ((i)=>{
      var data = '';
      var stream = fs.createReadStream(settings.articles[i]);
      stream.on('data', (chunk) => {
        data += chunk;
      });
      stream.on('end', () => {
        data = marked(data);
        settings['content'] += data.length<300? `<div class="post"><a href="/posts/${i}.html">${data}</a></div>`
          : `<div class="post"><a href="/posts/${i}.html">${data.slice(0, 300)}...</p></a><a href="/posts/${i}.html">Read More</a></div>`;
        gulp.src('./src/template/post.jade')
          .pipe(jade({
            locals: get_locals({"article":data}),
            pretty: true
          }))
          .pipe(rename(`${i}.html`))
          .pipe(gulp.dest('./public/posts/'));
      });
    })(i);    
  }
  gulp.src('./src/template/index.jade')
          .pipe(jade({
            locals: settings,
            pretty: true
          }))
          .pipe(gulp.dest('./public/'));
});

gulp.task('style', function () {
  gulp.src('./src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'));
  gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./public/css'));
  gulp.src('./src/fonts/*')
    .pipe(gulp.dest('./public/fonts'));
});

// gulp.task('javascript', function () {
//   browserify({entries: './src/js/app.js', debug: true})
//     .bundle()
//     .pipe(source('app.js'))
//     .pipe(buffer())
//     .pipe(uglify())
//     .pipe(gulp.dest('./public/js'));
// });

// gulp.task('route', function () {
  
// });
gulp.task('clean', () => {
  del(['./public/*']);
});

gulp.task('server', () => {
  live_server.start({
    port: 8181, 
    host: "0.0.0.0", 
    root: "./public", 
    open: true,
    wait: 1000
  });
});

gulp.task('build', ['clean', 'template', 'style'], function () {
  gulp.src('./src/images/*')
    .pipe(gulp.dest('./public/images'));
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
