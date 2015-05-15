var gulp = require('gulp');
var revall = require('gulp-rev-all');
var del = require('del');

gulp.task('buildset', function () {
    gulp.src('app/**')
        .pipe(revall({ ignore: [/^\/favicon.ico$/g, '.html', '.jpg','.png', '.svg','.scss','.map'] }))
        .pipe(gulp.dest('dist'))
});

gulp.task('clean', function (cb){
	del(['dist/**'],cb);
});

gulp.task('default', ['clean'], function(){
	gulp.start('buildset');
})