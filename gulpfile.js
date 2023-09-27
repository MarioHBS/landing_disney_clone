const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

const ugly = require('gulp-uglify');

function styleSCSS() {
    return gulp.src('./src/styles/*.scss')
        // .pipe(sourcemap.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('style.css'))
        // .pipe(sourcemap.write('./maps'))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(ugly())
        .pipe(gulp.dest('./dist/js'));
}

exports.default = gulp.parallel(styleSCSS, images, scripts);

exports.watch = function() {
    // gulp.watch('.src/styles/*.scss', gulp.parallel(styleSCSS));
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(styleSCSS));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.parallel(scripts));
}