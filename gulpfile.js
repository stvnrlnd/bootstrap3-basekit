'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
    return gulp.src('./src/js/main.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('eject', ['sass', 'js'], function() {
    return gulp.src('./dist/**/*')
        .pipe(gulp.dest('../'));
});

gulp.task('watch', ['sass', 'js'], function() {
    gulp.watch('./src/**/*', ['sass', 'js']);
});
