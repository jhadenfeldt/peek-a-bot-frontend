/*******************************
 Build Task
 *******************************/

var
    gulp         = require('gulp'),

    // gulp dependencies
    chmod        = require('gulp-chmod'),
    gulpif       = require('gulp-if'),
    replace      = require('gulp-replace'),
    merge        = require('merge-stream'),
    // config
    config       = require('../../tasks/config/user'),

    // shorthand
    globs        = config.globs,
    output       = config.paths.output
;

module.exports = function(callback) {
    return merge(
        gulp.src(['src/**.png', 'src/**.ico', 'src/**.svg', 'src/**.webmanifest'])
            .pipe(gulp.dest(output.packaged)),
        gulp.src(['src/**.html'])
            .pipe(replace('./dist/', './'))
            .pipe(gulp.dest(output.packaged)));

};