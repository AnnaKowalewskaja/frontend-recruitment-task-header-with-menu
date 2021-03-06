
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
    return gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});

