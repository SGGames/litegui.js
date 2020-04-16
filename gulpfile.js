var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jsFiles = [
  './src/core.js',
  './src/widgets.js',
  './src/console.js',
  './src/area.js',
  './src/menubar.js',
  './src/tabs.js',
  './src/dragger.js',
  './src/tree.js',
  './src/panel.js',
  './src/dialog.js',
  './src/table.js',
  './src/inspector.js'
];

var cssFiles = [
  './src/css/*.css'
]

gulp.task('build', function () {

  return gulp.src(jsFiles)
      .pipe(concat('litegui.js'))
      .pipe(gulp.dest('dist'));
  });

gulp.task('build-min', function () {

return gulp.src(jsFiles)
    .pipe(concat('litegui.min.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


gulp.task('build-css', function () {

  return gulp.src(cssFiles)
      .pipe(concat('litegui.css'))
      .pipe(gulp.dest('dist'));
  });