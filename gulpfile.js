// //Підключаємо gulp
// var gulp = require ("gulp");

// //Створюємо тестовий таск
// gulp.task ('testTask', function () {
//  console.log ('This is a test task!');
// });
// //Запуск тасків за замовчуванням
// gulp.task ("default", ["testTask"]);

// //додаткові плагіни Gulp
// var sass = require ("gulp-sass"), //конвертує SASS в CSS
//  cssnano = require ("gulp-cssnano"), //мінімізація CSS
//  autoprefixer = require ('gulp-autoprefixer'), //додавання префіксів в
//  //CSS для підтримки
//  //старих браузерів
//  imagemin = require ('gulp-imagemin'), //стиснення зображень
//  concat = require ("gulp-concat"), //об'єднання файлів - конкатенація
//  uglify = require ("gulp-uglify"), //мінімізація javascript
//  rename = require ("gulp-rename"); //перейменування файлів T

//  //копіювання HTML файлів в папку dist
// gulp.task ( "html", function () {
//     return gulp.src ( "src / *. html")
//     .pipe (gulp.dest ( "dist"));
//    });
//    //об'єднання, компіляція Sass в CSS, додавання префіксів і подальша 
//    //мінімізація коду
//    gulp.task ( "sass", function () {
//     return gulp.src ( "src / sass / *. sass")
//     .pipe (concat ( 'styles.sass'))
//     .pipe (sass ())
//     .pipe (autoprefixer ({
//     browsers: [ 'last 2 versions'],
//     cascade: false
//     }))
//     .pipe (cssnano ())
//     .pipe (rename ({suffix: '.min'}))
//     .pipe (gulp.dest ( "dist / css"));
//    });
//    //об'єднання і стиснення JS-файлів
//    gulp.task ( "scripts", function () {
//     return gulp.src ( "src / js / *. js") //вихідна директорія файлів
//     .pipe (concat ( 'scripts.js')) // конкатенація js-файлів в один
//     .pipe (uglify ()) //стиснення коду
//     .pipe (rename ({suffix: '.min'})) //перейменування файлу з
//     //приставкою .min
//     .pipe (gulp.dest ( "dist / js")); // директорія продакшена
//    });
//    //cтискання зображень
//    gulp.task ( 'imgs', function () {
//     return gulp.src ( "src / images /*.+ (jpg | jpeg | png | gif)")
//     .pipe (imagemin ({
//     progressive: true,
//     svgoPlugins: [{removeViewBox: false}],
//     interlaced: true
//     }))
//     .pipe (gulp.dest ( "dist / images"))
//    });
//    //відстежування за змінами у файлах
//    gulp.task ( "watch", function () {
//     gulp.watch ( "src / *. html", [ "html"]);
//     gulp.watch ( "src / js / *. js", [ "scripts"]);
//     gulp.watch ( "src / sass / *. sass", [ "sass"]);
//     gulp.watch ( "src / images /*.+ (jpg | jpeg | png | gif)", [ "imgs"]);
//    });
//    //Запуск тасків за замовчуванням
//    gulp.task ( "default", [ "html", "sass", "scripts", "imgs", "watch"]);
// function simpleTask() {
//     console.log ('This is a test task!');
//    }
//    exports.default = simpleTask
//    const { src, dest, watch, series } = require ("gulp");
// const concat = require ("gulp-concat");
// //const sass = require ("gulp-sass");
// const sass = require('gulp-sass')(require('sass'));
// const autoprefixer = require ("gulp-autoprefixer");
// const cssnano = require ("gulp-cssnano");
// const rename = require ("gulp-rename");
// const uglify = require ("gulp-uglify");
// //import gulpImagemin from 'gulp-imagemin';
// const imagemin = require("gulp-imagemin");
// //копіювання HTML файлів в папку dist
// function task_html () {
//  return src ( "app/*.html")
//  .pipe (dest ( "dist"));
// }
// exports.html = task_html
// //(У консолі прописуємо: gulp html)
// //об'єднання, компіляція Sass в CSS, додавання префіксів і подальша мінімізація коду
// function task_sass () {
//  return src ( "app/sass/*.sass")
//  .pipe (concat ( 'styles.sass'))
//  .pipe (sass ())
//  .pipe (autoprefixer ({
//  browsers: [ 'last 2 versions'],
//  cascade: false
//  }))
//  .pipe (cssnano ())
//  .pipe (rename ({suffix: '.min'}))
//  .pipe (dest ( "dist/css"));
// }
// exports.sass = task_sass
// //(У консолі прописуємо: gulp sass)
// //об'єднання і стиснення JS-файлів
// function task_scripts () {
//  return src ( "app/js/*.js") //вихідна директорія файлів
//  .pipe (concat ( 'scripts.js')) // конкатенація js-файлів в один
//  .pipe (uglify ()) //стиснення коду
//  .pipe (rename ({suffix: '.min'})) //перейменування файлу з приставкою
// .min
//  .pipe (dest ("dist/js")); // директорія продакшена
// }
// exports.scripts = task_scripts
// //(У консолі прописуємо: gulp scripts)
// //cтискання зображень
// function task_imgs() {
//  return src ( "app/img/*.+(jpg|jpeg|png|gif)")
//  .pipe (imagemin ({
//  progressive: true,
//  svgoPlugins: [{removeViewBox: false}],
//  interlaced: true
//  }))
//  .pipe (dest ("dist/images"))
// }
// exports.imgs = task_imgs
// //(У консолі прописуємо: gulp imgs)
// //відстежування за змінами у файлах
// function task_watch() {
//  watch ("app/*.html", task_html);
//  //watch ("app/js/*.js", task_scripts);
//  watch ("app/sass/*.sass", task_sass);
//  watch ("app/images/*.+(jpg|jpeg|png|gif)", task_imgs);
// }
// exports.watch = task_watch
// //(У консолі прописуємо: gulp watch)
// //Запуск тасків за замовчуванням
// exports.build = series(task_html, task_sass, /*task_scripts,*/ task_imgs,
// task_watch)
// //Після кожної задачі зберігаємо файл!!!
// //Для перевірки команд вводимо gulp –tasks

const { src, dest, watch, series } = require ("gulp");
const gulp = require("gulp");
const concat = require ("gulp-concat");
//const sass = require ("gulp-sass");
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require ("gulp-autoprefixer");
const cssnano = require ("gulp-cssnano");
const rename = require ("gulp-rename");
const uglify = require ("gulp-uglify");
const pump = require ("pump");
const imagemin = require ("gulp-imagemin");
const clean = require('gulp-clean');
const browserSync = require("browser-sync").create();
var reload = browserSync.reload;
//копіювання HTML файлів в папку dist
function html_task(cb){
    pump([
        gulp.src( "app/*.html"),
        gulp.dest( "dist")
    ],
    cb);
}
exports.html = html_task;
//(У консолі прописуємо: gulp html)
//об'єднання, компіляція Sass в CSS, додавання префіксів і подальша мінімізація коду
function sass_task(cb){
    pump([
        gulp.src ( "app/sass/*.sass"),
        concat ( 'styles.sass'),
        sass (),
        autoprefixer ({
        overrideBrowserslist: [ 'last 2 versions'],
        cascade: false
        }),
        cssnano (),
        rename ({suffix: '.min'}),
        gulp.dest ( "dist/css/")
    ],
    cb
    );
}
//gulp.task('sass', sass_task);
exports.sass = sass_task;
//об'єднання і стиснення JS-файлів
function script_task(cb) {
    pump([
          gulp.src("app/js/*.js"),
          concat ( 'scripts.js'),
          uglify(),
          rename({suffix: '.min'}),
          gulp.dest('dist/js/')
      ],
      cb
    );
  }   
//gulp.task("scripts", script_task);
exports.scripts = script_task;
function img_task(cb){
    pump([
        gulp.src("app/img/*.+(jpg|jpeg|png|gif)"),
        imagemin ({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }),
        gulp.dest("dist/images/")
    ],
    cb
    );
}
//gulp.task("imgs",img_task);
exports.imgs = img_task;
   //(У консолі прописуємо: gulp imgs)
   //відстежування за змінами у файлах
function watching() {
    // Serve files from the root of this project
    browserSync.init({
        server: "./app"
    });
    gulp.watch("app/*.html").on("change", reload);
    gulp.watch("app/js/*.js").on("change", reload);
    gulp.watch("app/css/*.css").on("change", reload);
    gulp.watch("app/sass/*.sass").on("change", reload);
    gulp.watch("app/images/*.+(jpg | jpeg | png | gif)").on("change", reload);
    watch ( "app/*.html",  html_task);
    watch ( "app/js/*.js",  script_task);
    watch ( "app/sass/*.sass",  sass_task);
    watch ( "app/images/*.+(jpg | jpeg | png | gif)", img_task);
}
//gulp.task('serve', watching);
exports.watch = watching;
gulp.task('clean', function(cb){
    pump([
        gulp.src("dist/*", {read : false}),
        clean()
    ],
    cb);
});
   //(У консолі прописуємо: gulp watch)
   //Запуск тасків за замовчуванням
   exports.default = series(html_task,sass_task,script_task,img_task,watching);
   
