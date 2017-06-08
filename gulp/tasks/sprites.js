var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');
// =============================================================================

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

// =============================================================================
gulp.task('createSprite', ['beginClean'], function(){
  return gulp.src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/build/sprite/"));
});

// =============================================================================

gulp.task('copySpriteCSS', ['createSprite'], function(){
  return gulp.src('./app/build/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules/'));
});
// =============================================================================

gulp.task('copySpriteGraphic', ['createSprite'], function(){
  return gulp.src('./app/build/sprite/css/**/*.svg')
  .pipe(gulp.dest('./app/assets/images/sprites'))
});

// =============================================================================
gulp.task('beginClean', function(){
  return del(['./app/build/sprite', './app/assets/images/sprites']);
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
  return del('./app/build/sprite');
});
// =============================================================================

gulp.task('icons', ['beginClean','createSprite',
  'copySpriteCSS', 'copySpriteGraphic', 'endClean']);
