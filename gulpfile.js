const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Пути к файлам
const paths = {
  scss: './*.scss',
  css: './'
};

// Компиляция SCSS → CSS
function styles() {
  return gulp.src(paths.scss)
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
}

// Слежение за изменениями
function watchFiles() {
  gulp.watch(paths.scss, styles);
}

exports.styles = styles;
exports.watch = gulp.series(styles, watchFiles);