const {src, dest, parallel} = require('gulp');
const sass = require('gulp-dart-scss');
const pleeease = require('gulp-pleeease');
const rename = require('gulp-rename');
const processhtml = require('gulp-processhtml');

function buildCss(){
    return src("./bootstrap/scss/bootstrap.scss")
        .pipe(sass())
        .pipe(pleeease())
        .pipe(
            rename({
                basename: "bootstrap",
                suffix: '.min',
                extname: '.css'
            }))
        .pipe(dest('./Proyecto/css'));
}

function moveJs(){
    return src("./bootstrap/dist/js/*")
    .pipe(dest("./Proyecto/js"));
}

var options = {
    overwrite: true
}

function processHtml(){
    return src('*.html')
        .pipe(processhtml())
        .pipe(dest('./Proyecto/', options))
}

exports.build_css = buildCss;
exports.move_js = moveJs;
exports.process_html = processHtml;
exports.default = parallel(buildCss, moveJs, processHtml);
