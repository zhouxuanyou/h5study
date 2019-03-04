// import gulp from 'gulp';
let gulp = require('gulp');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let pipeline = require('readable-stream').pipeline;
let less = require('gulp-less');
let cleancss = require('gulp-clean-css');
let path = require('path');

gulp.task('default',['uglifyjs','uglifycss'],()=>{
    console.log('你好小马哥');

});

gulp.task('uglifyjs',()=>{
    return pipeline(
        gulp.src('src/**.js'),
        uglify(),
        rename((path)=>{
            path.extname = '.min.js'
        }),
        gulp.dest('dist/js')
    );
});
gulp.task('uglifycss',()=>{
    return gulp.src('assets/styles/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(cleancss({
            compatibility: 'ie8'
        }))
        .pipe(rename((path)=>{
            path.basename+= '.min'
        }))
        .pipe(gulp.dest('dist/css'))
});