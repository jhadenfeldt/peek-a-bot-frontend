/*******************************
 Build Task
 *******************************/

var
    gulp         = require('gulp'),

    // gulp dependencies
    chmod        = require('gulp-chmod'),
    gulpif       = require('gulp-if'),
    replace      = require('gulp-replace'),

    // config
    config       = require('../../tasks/config/user'),

    // shorthand
    globs        = config.globs,
    output       = config.paths.output
;

module.exports = function(callback) {

    // copy html
    return gulp.src('src/**.html')
        .pipe(replace('./dist/', './'))
        .pipe(gulp.dest(output.packaged))
        ;

};