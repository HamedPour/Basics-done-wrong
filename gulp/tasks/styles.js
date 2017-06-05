var gulp = require('gulp'),
normalize = require('postcss-normalize'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
simpleVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
hexrgba = require ('postcss-hexrgba'),
mixins = require('postcss-mixins');


// =============================================================================

gulp.task('styles', function(){
  var plugins = [cssImport, mixins, simpleVars, normalize, hexrgba, autoprefixer, nested]
  return gulp.src('./app/assets/styles/master.css')
      .pipe(postcss(plugins))
      .on('error', function(errorinfo){
        console.log(errorinfo.toString());
        this.emit('end')
      })
      .pipe(gulp.dest('./app/build/styles'))
});
// =============================================================================
