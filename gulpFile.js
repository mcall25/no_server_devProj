const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');


gulp.task('concat', function() {
  gulp.src(['./app.js', './**/*.js'])
  .pipe(concat('all.js'))

  .pipe(babel({
    preset: ['es2015']})
  )
.pipe(gulp.dest('./dist'))
})
