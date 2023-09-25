const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const rename = require('gulp-rename');

function styles(cb) {
    return gulp.src('./src/styles/*.scss')
        // .pipe(sourcemap.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('style.css'))
        // .pipe(sourcemap.write('./maps'))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;