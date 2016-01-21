var gulp = require('gulp');
var karma = require('gulp-karma');
var rename = require("gulp-rename");


gulp.task('run-unit-tests', function () {
    return gulp.src([
        'lib/jquery.js',
        'wwwroot/1 - writing unit tests/async-tests.js'
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


gulp.task('default', ['run-unit-tests']);