var gulp=require("gulp"),
    livereload = require('gulp-livereload'),
    imagemin=require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    connect=require('gulp-connect');

var jsSrc='src/js/**/*';
var jsDist='dist/js';

var htmlSrc='src/**/*.html';
var htmlDist='dist';

var imagesSrc='src/images/**/*';
var imagesDist='dist/images'

var cssSrc='src/css/**/*.css';
var cssDist='dist/css'

gulp.task('js',function(){
    gulp.src(jsSrc)
        .pipe(gulp.dest(jsDist))
        .pipe(connect.reload())
});

gulp.task('html',function(){
    gulp.src(htmlSrc)
        .pipe(gulp.dest(htmlDist))
        .pipe(connect.reload());

});

gulp.task('images',function(){
    gulp.src(imagesSrc)
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest(imagesDist))
        .pipe(connect.reload());

});

gulp.task('css',function(){
    gulp.src(cssSrc)
        .pipe(gulp.dest(cssDist))
        .pipe(connect.reload());

});

gulp.task('connect',function(){

    connect.server({
        root:'dist',
        port:9080,
        liveload:true
    });

});

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('src/app/**/*.html',['html']);
    gulp.watch('src/js/**/*',['js']);
    gulp.watch('src/css/**/*.css',['css']);
    gulp.watch('src/images/**/*',['images']);
});

gulp.task('default',['js','html','images','css','watch','connect']);
/*
var webserver=require('gulp-webserver');
gulp.task('webserver',function(){
    gulp.src('./')
        .pipe(webserver({
            prot:8001,
            host:'192.168.1.104',
            liveload:true,
            directoryListing:{
                path:'./',
                enable:true
            }
        }))
});
gulp.task("default",function(){
	gulp.run('webserver');
});
*/