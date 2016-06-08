var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

var config = {
  distPath: './.tmp/',
  appPath: './app/',
  mainJsx: 'app/main.jsx',
  appJs: 'app.js',
  serverJs: './server/main.js'
}

gulp.task('live-server', function() {
  var server = new liveServer(config.serverJs);
  server.start();

  // watch for changes & reload browser
  gulp.watch(config.distPath + '**/*', function(file) {
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
    entries: config.mainJsx,
    debug: true,
  })
  .transform(reactify)
  .bundle()
  .pipe(source(config.appJs))
  .pipe(gulp.dest(config.distPath));
});

gulp.task('copy', function() {
  gulp.src(config.appPath + '*.css')
  .pipe(gulp.dest(config.distPath));
});

gulp.task('watch', function() {
  gulp.watch(config.appPath + '**/*.jsx', ['bundle']);
  gulp.watch(config.appPath + '*.css', ['copy']);
})

