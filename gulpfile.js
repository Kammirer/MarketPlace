// переменная название(лучше по смыслу) = подключение
const gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');

const spritesmith = require('gulp.spritesmith');

const tinypng = require('gulp-tinypng');

// переменная.метод('строка', функция () {вывод в консоль("то, что нужно вывести");});
gulp.task('test', function () {
    console.log("Hello, world");
});

// Добавляем автопрефиксер
gulp.task('autoprefixer', function (){
    // от куда
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // куда
        .pipe(gulp.dest('app/css'));
});

gulp.task('sprite', function () {
    // создание файлов
    var spriteData = gulp.src('src/sprite/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
      imgPath: '../img/sprite.png'
    }));
        // куда положить обработанные картинки спрайтом
    var imgStream = spriteData.img
    .pipe(gulp.dest('app/img'));
        // обработка файла css автопрефиксами
    var cssStream = spriteData.css
        // куда выгрузить
    .pipe(gulp.dest('app/css'));
});

gulp.task('tinypng', function () {
    gulp.src([
        'src/img/*.png',
        'src/img/*.jpg',
        'src/img/*.jpeg'
    ])
        .pipe(tingpng('WjoGTGFsL5mAiFaOaYiERDgYrd9EFRrA'))
        .pipe(gulp.dest('app/img'));
});

// автоматизация автопрефиксера
gulp.task('watch', ['autoprefixer', 'sprite'], function () {
    gulp.watch('src/css/*css', ['autoprefixer']);
    gulp.watch('src/sprite/*.png', ['sprite']);
    gulp.watch('src/img/*.jpg', ['tinypng']);
});

// запуск по слову gulp
gulp.task('default', ['watch']);