var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

var autoprefixOptions = {
    browsers: ['last 60 versions', '> 1%', 'Firefox ESR']
    },
    sassOptions = {
        outputStyle: 'expanded',
        errLogToConsole: true
    }

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/app.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

gulp.task('sass', function () { 
    return gulp.src('scss/**/*.scss')
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixOptions))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});
