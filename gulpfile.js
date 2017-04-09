var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS				= require('gulp-clean-css'),
		cssnano					= require('gulp-cssnano'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		ftp            = require('vinyl-ftp'),
		notify         = require("gulp-notify");

// Скрипты проекта

gulp.task('common-js', function() {
	return gulp.src([
		'500303_GULP/script/2gis.js',
		'500303_GULP/script/myscript.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('500303_GULP/script'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'500303_GULP/libs/jquery/dist/jquery.min.js',
		'500303_GULP/libs/modernizr/modernizr-custom.js',
		'500303_GULP/script/common.min.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('500303_GULP/script'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync',['js','sass'], function() {
	browserSync.init({
		/*server: {
			baseDir: '500303_GULP'
		},*/
		proxy:"500303.gulp:88",
		notify: false
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

//gulp.task('sass', function() {
	//return gulp.src('500303_GULP/scss/**/*.scss')
	//.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	/*.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('500303_GULP/css'))
	.pipe(browserSync.reload({stream: true}));
});*/
gulp.task('sass', function () {
	return gulp.src('500303_GULP/scss/*.scss') //берем какие-нибудь файлы, и возвращаем
				.pipe(sass()) // вызов како-то команды, плагина,
				.pipe(autoprefixer(['last 15 versions','> 1%','ie 8','ie 7'],{cascade:true}))
				.pipe(gulp.dest('500303_GULP/css')) //выгружаем работу плагина
				.pipe(browserSync.reload({stream:true})) //инжектим css
}); // инструкция, задача
gulp.task('css-libs',['sass'], function(){
	return gulp.src(['500303_GULP/css/mystyle.css',])
				.pipe(cssnano())
				.pipe(rename({suffix:'.min'}))
				.pipe(gulp.dest('500303_GULP/css'));
});
gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('500303_GULP/scss/**/*.scss', ['sass']);
	gulp.watch(['500303_GULP/script/**/*.js', '500303_GULP/script/common.min.js'], ['js']);
	//gulp.watch('500303_GULP/*.php', browserSync.reload);
	gulp.watch('500303_GULP/**/*.php').on('change', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('500303_GULP/images/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['removedist', 'imagemin', 'css-libs', 'js'], function() {

	var buildFiles = gulp.src([
		'500303_GULP/*.html',
		'500303_GULP/*.php',
		'500303_GULP/.htaccess',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'500303_GULP/css/mystyle.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'500303_GULP/script/scripts.min.js',
		'500303_GULP/script/form.php',
		]).pipe(gulp.dest('dist/script'));

	var buildFonts = gulp.src([
		'500303_GULP/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

	var buildModules = gulp.src([
		'500303_GULP/modules/**/*',
		]).pipe(gulp.dest('dist/modules'));

});

gulp.task('deploy', function() {

	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});

	var globs = [
	'dist/**',
	'dist/.htaccess',
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));

});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
