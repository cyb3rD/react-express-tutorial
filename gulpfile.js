var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('live-server', function() {
  var server = new liveServer('server/main.js');
  server.start();

  // watch for changes & reload browser
  gulp.watch('./.tmp/**/*', function(file) {
    server.notify.apply(server, [file]);
  });

});

gulp.task('serve', ['bundle','live-server', 'watch'],  function() {
  browserSync.init(null, {
      proxy: 'http://localhost:3000',
      port: 9001
  })
});

gulp.task('bundle', ['copy'], function() {
  return browserify({
    entries: 'app/main.jsx',
    debug: true,
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'));
});

gulp.task('copy', function() {
  gulp.src('app/*.css')
  .pipe(gulp.dest('./.tmp'));
});

gulp.task('watch', function() {
  gulp.watch('./app/**/*.jsx', ['bundle']);
  gulp.watch('./app/*.css', ['copy']);
})

