var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// ======================================================================DEFAULT
gulp.task('default', ['watch']);
// =================================================================BROWSER-SYNC
gulp.task('watch', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  })
});

// ======================================================INDEX.HTML========WATCH
watch('./app/index.html', function(){
  browserSync.reload();
});
// ======================================================STYLES============WATCH
watch('./app/assets/styles/**/*.css', function(){
  gulp.start('cssInject');
});

// Injecting the finished css build using stream, after styles has compiled.
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/build/styles/master.css')
  .pipe(browserSync.stream());
});
// =============================================================================
watch('./app/assets/scripts/**/*.js', function(){
    gulp.start('scriptsRefresh');
  });


gulp.task('scriptsRefresh', ['scripts'], function(){
  browserSync.reload();
});


// =============================================================================
