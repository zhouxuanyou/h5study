let gulp = require('gulp');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let pipeline = require('readable-stream').pipeline;
let less = require('gulp-less');
let cleancss = require('gulp-clean-css');
let path = require('path');
let htmlmin = require('gulp-htmlmin');
let imgmin = require('gulp-imagemin');
let browsersync = require('browser-sync');
let reload = browsersync.reload;

gulp.task('default',()=>{
    gulp.watch('assets/styles/*.less',['ugless']);
    gulp.watch("*.html").on('change', reload);
    browsersync.init({
        server:{
            baseDir:'./'
        },
        // ui:{
        //     port: 6676
        // }
    })
});

gulp.task('ugjs',()=>{
    return pipeline(
        gulp.src('src/*.js'),
        uglify(),
        rename((path)=>{
            path.extname='.min.js'
        }),
        gulp.dest('dist/js')
    )
});

gulp.task('ugless',()=>{
    return pipeline(
        gulp.src('assets/styles/*.less'),
        less({ paths: [ path.join(__dirname, 'less', 'includes') ]}),
        cleancss({compatibility: 'ie8'}),
        rename((path)=>{
            path.extname='.min.css'
        }),
        gulp.dest('dist/css'),
        reload({stream: true})
    )
});

gulp.task('ugimg',()=>{
    pipeline(
        gulp.src('assets/images/*'),
        imgmin(),
        gulp.dest('dist/img')
    )
});

gulp.task('ughtml',()=>{
    pipeline(
        gulp.src('*.html'),
        htmlmin({collapseWhitespace: true}),
        gulp.dest('dist/html')
    )
});