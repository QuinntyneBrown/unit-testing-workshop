﻿var gulp = require('gulp');
var karma = require('gulp-karma');
var rename = require("gulp-rename");


gulp.task('run-unit-tests', function () {
    return gulp.src([
        'lib/jquery.js',
        'lib/angular.js',
        'lib/angular-route.js',
        'lib/angular-mocks.js',
        'wwwroot/3 - frameworks/angular-app.js',
        'wwwroot/3 - frameworks/angular-app.spec.js'
    ])
    .pipe(karma({
        configFile: 'karma.conf.js',
        action: 'run'
    }))
    .on('error', function (err) {
        console.log(err);
        this.emit('end');
    });
});


gulp.task('watch', function () {
    gulp.watch([
        './wwwroot/**/*.js'
    ], ['run-unit-tests']);
});

gulp.task('default', ['run-unit-tests', 'watch']);