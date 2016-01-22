var gulp = require('gulp');
var karma = require('gulp-karma');
var rename = require("gulp-rename");


gulp.task('run-unit-tests', function () {
    return gulp.src([
        'lib/jquery.js',
        //'wwwroot/0 - Introduction/checks-and-balances.js',
        //'wwwroot/0 - Introduction/checks-and-balances-fail.js',
        'wwwroot/1 - writing unit tests/basic-tests.js',
        //'wwwroot/1 - writing unit tests/async-tests.js'
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

gulp.task('default', ['run-unit-tests','watch']);