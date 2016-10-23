/**
 * Created by elenabugercuk on 22.10.16.
 */
var gulp = require('gulp');


var SRC = 'src/AppBundle/Resources/assets/js/';
var DEST = 'web/bundles/app/js';
gulp.task('js', function() {
    return gulp.src(SRC + '*.js')
        .pipe(gulp.dest(DEST));
});

gulp.task('default', ['js'], function() {

});