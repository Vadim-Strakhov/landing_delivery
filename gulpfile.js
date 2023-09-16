const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/css/'))
        .pipe(browserSync.stream());
})

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', gulp.parallel('styles'));
    gulp.watch('src/sass/*/*.scss', gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
