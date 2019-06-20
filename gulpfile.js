const gulp = require('gulp');  // инициализация, подключение модуля
const concat = require('gulp-concat');
const gulpSass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');

const sourcemaps = require('gulp-sourcemaps');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const plumber = require('gulp-plumber');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const run = require('run-sequence');
const gcmq = require("gulp-group-css-media-queries");
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();

const cssFiles = [
    "./node_modules/normalize.css/normalize.css",
    "./src/css/some.css",
    "./src/css/other.css"];
const jsFiles = [
    "./src/script/jquery.js",
    "./src/script/jquery.inputmask.bundle.min.js",
    "./src/script/tether.min.js",
    "./src/script/bootstrap.min.js",
    "./src/script/modernizr.js",
    "./src/script/jquery.fancybox.min.js",
    // "./src/script/2gis.js",
    "./src/script/map.js",
    "./src/script/validate.js",
    // "./src/script/Photogalery.js",
    "./src/script/PhotoQuery.js",
    "./src/script/myscript.js"];

/*Functions*/

function hello() {
    return console.log('hello');
}

function styles() {
   return gulp.src(cssFiles)
       .pipe(concat('style.css'))
       .pipe(autoprefixer({
           browsers: ['last 2 versions'],
           cascade: false
       }))
       .pipe(cleanCSS({level: 2}))
       .pipe(gulp.dest('./build/css/'))
       .pipe(browserSync.stream());
}

function sass() {
    return gulp.src("./src/scss/mystyle.scss")
        // .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(gulpSass())
        .pipe(gcmq())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({level: 2}))
        // .pipe(sourcemaps.write())
        .pipe(cssnano())
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('script.js'))
        .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest('./build/script/'))
        .pipe(browserSync.stream());
}
function html() {
    return gulp.src('*.html')
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream());
}
function php() {
    return gulp.src('./src/**/*.php')
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream());
}

function srcImg() {
    return gulp.src('./src/images/**/*.{png,jpg}')
        .pipe(gulp.dest('./build/images'))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src('./build/images/**/*.{png,jpg}')
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imageminJpegRecompress({
                loops: 5,
                min: 65,
                max: 70,
                quality: 'medium'
            }),
            imagemin.optipng({optimizationLevel:3}),
            pngquant({quality: [0.65,0.70], speed: 5})
        ]))
        .pipe(gulp.dest('./build/images'));
}

function svg() {
    return gulp.src('./src/images/**/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty :true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode : true}
        }))
        .pipe(replace('&gt;','>'))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest('./build/images'));
}

function watch(){

    browserSync.init({
            proxy: "500303-gulp.open"
    });

    // gulp.watch('./src/css/**/*.css', styles);
    gulp.watch('./src/scss/**/*.scss', sass);
    gulp.watch('./src/script/**/*.js', scripts);
    gulp.watch('./src/images/**/*.{png,jpg,jpeg}', srcImg);
    gulp.watch('./src/images/**/*.{svg}', svg);
    // gulp.watch('./*.php').on('change', browserSync.reload);
    gulp.watch('./*.html', html);
    gulp.watch('./src/**/*.php', php);
}

function clean(){
    return del(['build/*']);
}

/*Task*/

gulp.task('styles', styles);
gulp.task('sass', sass);
gulp.task('scripts', scripts);
gulp.task('srcImg', srcImg);
gulp.task('svg', svg);
gulp.task('images', images);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts)) );
gulp.task('dev', gulp.series('build', 'watch') );

gulp.task('copy', function () {
    return gulp.src([
        './src/img/**',
        './src/js/**',
        './src/css/**',
    ])
        .pipe(gulp.dest('./build'));

});

function defaultTask(cb) {
    cb();
    // console.log('hello');
}
exports.default = watch;