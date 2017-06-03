var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

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
// =============================================================================
