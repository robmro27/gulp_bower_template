var gulp = require('gulp'),
    minifyCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    rename = require('gulp-rename'),
    jshint = require('gulp-hint'),
    plumb = require('gulp-plumber');
    
gulp.task('style', function() {
    return gulp
        .src('css/style.css')
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets'));
});

gulp.task('script', function() {
   return gulp
           .src('js/script.js')
           .pipe(plumber())
           .pipe(uglify())
           .pipe(jshint())
           .pipe(rename({suffix: '.min'}))
           .pipe(gulp.dest('assets'));
});

gulp.task('delete', function() {
   del(['assets/*'], function(err) {});
});


gulp.task('watch', function() {
    gulp.watch('css/style.css',['style']);
    gulp.watch('js/script.css',['script']);
});

gulp.task('default', ['delete','style', 'script', 'watch']);