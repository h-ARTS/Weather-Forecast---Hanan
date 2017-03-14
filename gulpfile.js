var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var autoprefixOptions = {
    browsers: ['last 60 versions', '> 1%', 'Firefox ESR']
    },
    sassOptions = {
        outputStyle: 'expanded',
        errLogToConsole: true
    }

gulp.task('default', function () { 
    console.log('Hello Hanan Mufti, we are going to build a weather forecast app!');
});

gulp.task('sass', function () { 
    return gulp.src('scss/**/*.scss')
    .pipe(sass(sassOptions))
    .pipe(autoprefixer(autoprefixOptions))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});
