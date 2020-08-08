var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var tinypng = require('gulp-tinypng-compress');

gulp.task('minify-css', function (done) {
   return gulp.src("./src/css/*.css")
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest("dist/css"))
   done();
});
gulp.task('move-js', function (done) {
   return gulp.src("./src/js/*.js")
      .pipe(gulp.dest("dist/js"))
   done();

});
gulp.task('minifyHTML', function (done) {
   return gulp.src("./src/*.html")
      .pipe(gulp.dest("dist/"))
   done();
});
gulp.task('fonts', function (done) {
   return gulp.src("./src/fonts/**/*")
      .pipe(gulp.dest("dist/fonts"))
   done();
});
gulp.task('tinypng', function (done) {
   return gulp.src("./src/img/**/*.{png,jpg,jpeg}")
      .pipe(tinypng({
         key: 'hffzJs18nc2Vv7d93T6kNbwBRg7LTpF1'
      }))
      .pipe(gulp.dest('dist/img/'));
   done();
});
gulp.task('default', gulp.parallel('minify-css', 'move-js', 'minifyHTML', 'fonts', 'tinypng', function (done) {

   done();
}));